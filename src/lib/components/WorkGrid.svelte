<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	const { children }: Props = $props();
</script>

<div class="w-full grid-cols-2 gap-4 sm:grid">
	{@render children()}
</div>
