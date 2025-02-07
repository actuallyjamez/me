<script lang="ts">
	import { crossfade } from 'svelte/transition';

	const items = [
		['X', 'http://x.com/actuallyjamez'],
		['Github', 'https://github.com/actuallyjamez'],
		['SoundCloud', 'https://soundcloud.com/actuallyjamez']
	];

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 400),
		fallback() {
			return {
				duration: 150,
				css: (t) => `opacity: ${t}`
			};
		}
	});

	let selected = $state<string | undefined>(undefined);
</script>

<div
	class={'flex justify-between border border-black/10 bg-white/70  transition-shadow duration-150 backdrop-blur-md rounded-full'}
	onmouseleave={() => (selected = undefined)}
	role='navigation'
	
>
	<div class="flex justify-between">
		{#each items as [label, href] (href)}
			<a
				class="relative after:content-['_↗'] py-2 px-4 group transition-all duration-150"
				rel="noopener noreferrer"
				target="_blank"
				onmouseenter={() => (selected = href)}
				onfocus={() => (selected = href)}
				onfocusout={() => (selected = undefined)}
				{href}
			>
				{#if selected === href}
					<span
						in:receive={{ key: 'hoverBackground' }}
						out:send={{ key: 'hoverBackground' }}
						class="absolute m-1 inset-0 rounded-full bg-black/5 -z-10 group-active:bg-black/10 transition-colors"
					></span>
				{/if}
				<span class="relative z-10">{label}</span>
			</a>
		{/each}
	</div>
</div>
