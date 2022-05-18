import App from "./components/App.svelte";

/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
const app = new App({
	target: document.body,
	intro: true,
});

export default app;