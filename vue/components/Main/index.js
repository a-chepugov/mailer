import List from '../List/index.vue';
import Login from '../Login/index.vue';
import Message from '../Message/index.vue';
import Server from '../Server/index.vue';

export default {
	components: {
		List,
		Login,
		Server,
		Message
	},
	data () {
		return {
			tabs: [
				{name: 'Данные пользователя:', component: 'Login'},
				{name: 'Данные сервера:', component: 'Server'},
				{name: 'Данные письма:', component: 'Message'}
			]
		}
	}
};
