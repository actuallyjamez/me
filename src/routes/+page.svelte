<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import CityImage from '$lib/images/city.webp';
	import EngineerImage from '$lib/images/engineer.gif';
	import SantanderImage from '$lib/images/santander.jpg';
	import Section from '$lib/components/Section.svelte';
	import WorkGrid from '$lib/components/WorkGrid.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { fade, scale } from 'svelte/transition';

	type WithTarget<Event, Target> = Event & { currentTarget: Target };

	const images = [EngineerImage, SantanderImage, CityImage];

	let m = $state({ x: 0, y: 0 });
	let visible = $state(false);
	let currentImage = $state<typeof CityImage | string>(images[0]);

	function handleMouseMove(e: WithTarget<MouseEvent, HTMLDivElement>) {
		m = { x: e.clientX, y: e.clientY };
	}

	async function handleMouseEnter(image: typeof CityImage) {
		currentImage = image;
		visible = true;
	}

	async function handleMouseLeave() {
		visible = false;
	}
</script>

<svelte:head>
	<title>James Morris</title>
</svelte:head>

<div class="pointer-events-none fixed z-50" style="left: {m.x}px; top: {m.y}px;">
	{#if visible}
		<div transition:fade={{ duration: 150 }}>
			<div transition:scale={{ start: 0.8, duration: 150 }} class="hidden w-[500px] md:block">
				{#each images as image}
					{#if currentImage === image}
						<img
							src={image}
							alt=""
							class="aspect-video rounded-2xl border border-black/10 object-cover shadow-2xl"
						/>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>

<div class="lg:sticky top-0 z-50 -ml-3 flex p-8">
	<Nav />
</div>

<div class="relative px-8 pb-10 pt-6" onmousemove={handleMouseMove} role="none">
	<h1 class="text-3xl font-medium xl:text-4xl">James Morris</h1>
	<p class="mt-6 max-w-md text-lg font-light xl:text-xl" onmouseleave={handleMouseLeave}>
		Cool person from <span
			role="none"
			class="group font-normal transition-all md:cursor-cell md:rounded-md md:bg-black/5 md:px-1 md:hover:bg-black/10 lg:transition-colors xl:bg-transparent xl:px-0 xl:hover:bg-transparent"
			onmouseenter={() => handleMouseEnter(images[2])}
			onmouseleave={handleMouseLeave}
		>
			<span
				class="transition-colors lg:transition-colors xl:rounded-md xl:bg-black/5 xl:px-1 xl:group-hover:bg-black/10"
			>
				Northampton, United{' '}
			</span>
			<span
				class="transition-colors duration-150 lg:transition-colors xl:rounded-md xl:bg-black/5 xl:px-1 xl:group-hover:bg-black/10"
			>
				Kingdom.
			</span>
		</span>
		Currently working as a
		<span
			role="none"
			class="group font-normal transition-all md:cursor-cell md:rounded-md md:bg-black/5 md:px-1 md:hover:bg-black/10 lg:transition-colors xl:bg-transparent xl:px-0 xl:hover:bg-transparent"
			onmouseenter={() => handleMouseEnter(images[0])}
			onmouseleave={handleMouseLeave}
		>
			<span
				class="transition-colors lg:transition-colors xl:rounded-md xl:bg-black/5 xl:px-1 xl:group-hover:bg-black/10"
			>
				Software
			</span>
			<span
				class="transition-colors duration-150 lg:transition-colors xl:rounded-md xl:bg-black/5 xl:px-1 xl:group-hover:bg-black/10"
			>
				Engineer
			</span>
		</span>
		at a company called
		<span
			role="none"
			class="group font-normal md:cursor-cell"
			onmouseenter={() => handleMouseEnter(images[1])}
			onmouseleave={handleMouseLeave}
		>
			<span
				class="rounded-md transition-all duration-150 md:bg-black/5 md:px-1 md:group-hover:bg-black/10 lg:transition-colors"
			>
				Santander.
			</span>
		</span>
	</p>

	<div class="relative pt-8">
		<ButtonLink href="mailto:hey@jamesmorris.co">Request resume</ButtonLink>
	</div>
</div>

<Section title="About">
	<p class="text-2xl xl:text-3xl">
		I am a customer-focused full-stack software programmer with experience in creating performant
		and engaging web experiences.
	</p>
	<p class="mt-6 text-lg font-light xl:text-xl">
		I'm always eager to learn and expand my skill set. I'm well-versed in multiple programming
		languages and frameworks, and I take pride in delivering top-notch work. Whether I'm working on
		a small tool or a big web app, I enjoy the challenge of finding innovative solutions. Check out
		some of the cool projects I've worked on below!
	</p>
</Section>

<Section title="Notable Work">
	<WorkGrid>
		<WorkCard title="Sonar">
			{#snippet description()}
				Sonar is a small proof of concept spotify player, designed for large format displays which I
				built to learn Vue.js and the fundamentals of realtime cross device reactivity. The project
				uses the Spotify Connect API to allow users to control playback on their devices.
			{/snippet}
			{#snippet actions()}
				<ButtonLink href="https://github.com/actuallyjamez/sonar">View source</ButtonLink>
				<ButtonLink href="https://sonar.now.sh">Try it out!</ButtonLink>
			{/snippet}
		</WorkCard>

		<WorkCard title="drHEADer">
			{#snippet description()}
				drHEADer is a simple, lightweight, and fully customizable header auditing tool. It validates
				HTTP headers against safe defaults and can generate JUnit reports for straight forward
				integration with other tools. It's built with Python and is mentioned in the OWASP secure
				headers project.
			{/snippet}
			{#snippet actions()}
				<ButtonLink href="https://github.com/Santandersecurityresearch/DrHeader">
					View source
				</ButtonLink>
			{/snippet}
		</WorkCard>

		<WorkCard title="Live Enhancement Suite">
			{#snippet description()}
				The Live Enhancement Suite is a collection of macros designed to enhance the experience of
				working with Ableton Live. I wrote the MacOS installer as an exercise in learning Electron,
				and desktop application development. The project remains open source and is actively used by
				award winning musicians.
			{/snippet}
			{#snippet actions()}
				<ButtonLink href="https://enhancementsuite.me">Check it out</ButtonLink>
			{/snippet}
		</WorkCard>

		<WorkCard title="Redways Payment Gateway">
			{#snippet description()}
				My local badminton club needed a solution to accept payments for membership and playing
				fees. I took the opportunity to learn about Stripes payment gateway and built a simple web
				app using Next.js and Stripe Checkout. All pricing information is manged by Stripe Products,
				and dynamically fetched by the app.
			{/snippet}
		</WorkCard>
	</WorkGrid>
</Section>
