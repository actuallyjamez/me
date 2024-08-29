<script lang="ts">
	import { crossfade } from 'svelte/transition';

	const items = [
		['Github', 'https://github.com/actuallyjamez'],
		['Twitter', 'http://twitter.com/actuallyjamez'],
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
	class={'flex justify-between border border-black/5 bg-white/70 shadow-xl transition-shadow duration-150 backdrop-blur-md rounded-full'}
	onmouseleave={() => (selected = undefined)}
	role='navigation'
	
>
	<div class="flex justify-between">
		{#each items as [label, href] (href)}
			<a
				class="relative sm:after:content-['_↗'] py-4 px-6 group transition-all duration-150"
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
