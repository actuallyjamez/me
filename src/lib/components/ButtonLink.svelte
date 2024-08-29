<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		href: string;
	};

	const { href, children }: Props = $props();
</script>

<a
	class="rounded-full border border-black/5 bg-black/5 px-3 py-1.5 transition-colors after:content-['_↗'] hover:bg-black/10 active:bg-black/20"
	{href}
>
	{@render children()}
</a>
