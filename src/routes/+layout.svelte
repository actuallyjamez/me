<script>
	import '../fonts/wotfard/stylesheet.css';
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	const { children } = $props();
</script>

<div class="absolute -z-20 h-96 w-full bg-gradient-to-b from-green-100/50 to-transparent"></div>
<div
	class="absolute inset-x-0 top-[-10rem] -z-20 transform-gpu overflow-hidden opacity-70 blur-3xl sm:top-[-20rem]"
>
	<svg
		class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-70 sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
		viewBox="0 0 1155 678"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
			fill-opacity=".3"
			d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
		/>
		<defs>
			<linearGradient
				id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
				x1="1155.49"
				x2="-78.208"
				y1=".177"
				y2="474.645"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#9089FC" />
				<stop offset="1" stop-color="#FF80B5" />
			</linearGradient>
		</defs>
	</svg>
</div>

<div class="mx-auto max-w-7xl">
	{@render children()}
</div>

<footer class="my-8 flex justify-center">
	<a
		href="https://twitter.com/actuallyjamez"
		rel="noopener noreferrer"
		target="_blank"
		class="opacity-50 transition-opacity hover:opacity-100"
	>
		made by me
	</a>
</footer>
