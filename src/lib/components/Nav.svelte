<script lang="ts">
	import { crossfade } from 'svelte/transition';

	let items = [
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

	let selected: string | undefined;
</script>

<div
	class={'flex justify-between border border-black/5 bg-white/60 shadow-xl transition-shadow duration-200 backdrop-blur-md rounded-full'}
	on:mouseleave={() => (selected = undefined)}
	
>
	<div class="flex justify-between">
		{#each items as [label, href] (href)}
			<a
				class="relative sm:after:content-['_↗'] py-4 px-6 group"
				rel="noopener noreferrer"
				target="_blank"
				on:mouseenter={() => (selected = href)}
				on:focus={() => (selected = href)}
				on:focusout={() => (selected = undefined)}
				{href}
			>
				{#if selected === href}
					<span
						in:receive={{ key: 'hoverBackground' }}
						out:send={{ key: 'hoverBackground' }}
						class="absolute m-1 inset-0 rounded-full bg-black/5 -z-10 group-active:bg-black/10 transition-colors"
					/>
				{/if}
				<span class="relative z-10">{label}</span>
			</a>
		{/each}
	</div>
</div>
