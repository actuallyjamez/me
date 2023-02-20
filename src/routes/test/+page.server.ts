import type { PageServerLoad } from './$types';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const longRunningTask = async () => {
	await sleep(1000);
	return 'hello world';
};

export const load = (async () => {
	const data = longRunningTask();
	return {
		defer: {
			thing: data
		}
	};
}) satisfies PageServerLoad;
