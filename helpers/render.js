import Mustache from 'mustache';

export default function render(template = '', data = {}) {
	return Mustache.render(template, data);
}
