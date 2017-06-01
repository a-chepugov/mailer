import {mapActions, mapMutations} from 'vuex';

const CSV = require('../../../helpers/CSV');
import render from '../../../helpers/render';

export default {
	data () {
		return {
			files: [],
			data: [],
			fields: []
		}
	},
	methods: {
		...mapMutations([
			'setData'
		]),
		onSourcesChange(event){
			let {target: {files = []} = {}} = event;

			// files является объектом типа FilesList
			this.files = Array.from(files);
			this.parseSourceFiles();
		},
		async parseSourceFiles() {
			this.data = [];
			let fieldsSet = new Set;
			for (let file of this.files) {
				let promise = new Promise((resolve, reject) => {
					CSV.parse(file,
						(results = {}) => {
							let {data = []} = results;
							if (data.length) {
								let fields = Object.keys(data[0]);
								resolve({fields, data});
							}
							resolve({});
						},
						reject
					)
				});
				let {fields, data} = await promise
					.catch(error => {
						console.error(error);
						return {}
					});
				fields.forEach(item => {
					fieldsSet.add(item)
				});
				this.data = this.data.concat(data);
			}
			this.fields = Array.from(fieldsSet);
			this.setData(this.data);
		},
		sourceDelete(index) {
			this.files.splice(index, 1);
			this.parseSourceFiles();
		},
		itemDelete(index){
			this.data.splice(index, 1);
			this.setData(this.data);
		},
		previewItemMail(index){
			let {subject: subjectTemplate, message: messageTemplate} = this.$store.state.template;
			let data = this.data[index];
			const subject = render(subjectTemplate, data);
			const message = render(messageTemplate, data);

			const preview = window.open("", "Предпросмотр", "titlebar=yes,scrollbars=yes,toolbar=yes");
			preview.document.write(message);
			preview.document.title = subject;
		}
	},
}