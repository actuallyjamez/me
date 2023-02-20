import type { PageServerLoad } from './$types';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const longRunningTask = async () => {
	await sleep(1500);
	return 'ayo yoo!';
};

export const load = (async () => {
	const data = longRunningTask();
	return {
		defer: {
			thing: data
		}
	};
}) satisfies PageServerLoad;
