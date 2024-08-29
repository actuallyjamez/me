<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		title: string;
		description: Snippet;
		actions?: Snippet;
	};

	const { title, description, actions }: Props = $props();
</script>

<div class="pb-20">
	<h1 class="text-lg font-medium">
		{title}
	</h1>

	<p class="mt-4 max-w-md text-lg font-light leading-snug">
		{@render description()}
	</p>

	<div class="flex space-x-3 pt-6">
		{@render actions?.()}
	</div>
</div>
