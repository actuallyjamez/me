<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		href: string;
	};

	const { href, children }: Props = $props();
</script>

<a
	class="rounded-full text-white border border-white/5 bg-black px-3 py-1.5 transition-colors after:content-['_↗'] hover:bg-black/80 active:bg-black/70"
	{href}
>
	{@render children()}
</a>
