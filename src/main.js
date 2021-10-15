import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		phoneNum: '(469) 669-3TOW',
    email: 'johnweiss@24hrtowingtexas.com'
	}
});

export default app;