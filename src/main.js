import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    email: 'johnweiss@24hrtowingtexas.com'
	}
});

export default app;