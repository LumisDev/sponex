import App from './App.svelte'
import './main.pcss'

const app = new App({
	target: document.body,
	props: {
		name: 'Svelte',
		elements: [
			{
				name: '--Choose one object--',
				val: ''
			},
			{
				name: 'Rocky',
				val: 'rocky'
			},
			{
				name: 'Mars',
				val: 'mars'
			},
			{
				name: 'Sheldon',
				val: 'sheldon'
			}
		]
	}
})

export default app
