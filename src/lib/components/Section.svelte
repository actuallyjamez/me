<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		title: string;
	};

	const { children, title }: Props = $props();
</script>

<div class="relative items-start px-8 pt-12 md:flex md:pt-20">
	<aside
		class="hidden flex-[0_0_25%] pb-12 text-xl font-medium md:sticky md:top-28 md:inline-block"
	>
		{title}
	</aside>
	<main class="w-full">
		{@render children()}
	</main>
</div>
