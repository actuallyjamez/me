<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import CityImage from '$lib/images/city.webp';
	import EngineerImage from '$lib/images/engineer.webp';
	import SantanderImage from '$lib/images/santander.jpg';
	import Section from '$lib/components/Section.svelte';
	import WorkGrid from '$lib/components/WorkGrid.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { fade, scale } from 'svelte/transition';

	type WithTarget<Event, Target> = Event & { currentTarget: Target };

	let images = {
		engineer: EngineerImage,
		santander: SantanderImage,
		northampton: CityImage
	};

	let m = { x: 0, y: 0 };
	let visible = false;
	let currentImage = images.engineer;

	function handleMouseMove(e: WithTarget<MouseEvent, Window>) {
		m = { x: e.clientX, y: e.clientY };
	}

	async function handleMouseEnter(image: string) {
		currentImage = image;
		visible = true;
	}

	async function handleMouseLeave() {
		visible = false;
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />

<svelte:head>
	<title>James Morris</title>
</svelte:head>

<div class="pointer-events-none fixed z-50" style="left: {m.x}px; top: {m.y}px;">
	{#if visible}
		<div transition:fade={{ duration: 150 }}>
			<div transition:scale={{ start: 0.8, duration: 150 }} class="hidden w-[500px] md:block">
				{#if currentImage === images.engineer}
					<img
						src={images.engineer}
						alt=""
						class="aspect-video rounded-2xl border border-black/10 object-cover shadow-2xl"
					/>
				{:else if currentImage === images.santander}
					<img
						src={images.santander}
						alt=""
						class="aspect-video rounded-2xl border border-black/10 object-cover shadow-2xl"
					/>
				{:else if currentImage === images.northampton}
					<img
						src={images.northampton}
						alt=""
						class="aspect-video rounded-2xl border border-black/10 object-cover shadow-2xl"
					/>
				{/if}
			</div>
		</div>
	{/if}
</div>
<div class="lg: sticky top-0 z-50 -ml-4 flex p-8">
	<Nav />
</div>

<div class="relative px-8 py-10">
	<h1 class="text-3xl font-medium xl:text-4xl">James Morris</h1>
	<p class="mt-6 max-w-md text-lg font-light xl:text-xl" on:mouseleave={handleMouseLeave}>
		Cool person from <span
			class="group cursor-cell rounded-md bg-black/5 px-1 font-normal transition-colors hover:bg-black/10 xl:bg-transparent xl:px-0 xl:hover:bg-transparent"
			on:mouseenter={() => handleMouseEnter(images.northampton)}
			on:mouseleave={handleMouseLeave}
		>
			<span
				class="transition-colors xl:rounded-md xl:bg-black/5 xl:px-1 xl:group-hover:bg-black/10"
			>
				Northampton, United{' '}
			</span>
			<span
				class="transition-colors duration-150 xl:rounded-md xl:bg-black/5 xl:px-1 xl:group-hover:bg-black/10"
			>
				{' '}Kingdom.
			</span>
		</span>
		Currently working as a
		<span
			class="group cursor-cell rounded-md bg-black/5 px-1 font-normal transition-colors hover:bg-black/10 xl:bg-transparent xl:px-0 xl:hover:bg-transparent"
			on:mouseenter={() => handleMouseEnter(images.engineer)}
			on:mouseleave={handleMouseLeave}
		>
			<span
				class="transition-colors xl:rounded-md xl:bg-black/5 xl:px-1 xl:group-hover:bg-black/10"
			>
				Software{' '}
			</span>
			<span
				class="transition-colors duration-150 xl:rounded-md xl:bg-black/5 xl:px-1 xl:group-hover:bg-black/10"
			>
				{' '}Engineer
			</span>
		</span>
		at a company called
		<span
			class="group cursor-cell font-normal"
			on:mouseenter={() => handleMouseEnter(images.santander)}
			on:mouseleave={handleMouseLeave}
		>
			<span
				class="rounded-md bg-black/5 px-1 transition-colors duration-150 group-hover:bg-black/10"
			>
				Santander.
			</span>
		</span>
	</p>

	<div class="relative pt-8">
		<ButtonLink href="mailto:hey@jamesmorris.co">Request resume</ButtonLink>
	</div>
</div>

<Section>
	<svelte:fragment slot="title">About</svelte:fragment>

	<p class="text-2xl xl:text-3xl">
		I am a customer-focused full-stack software programmer with experience in creating performant
		and engaging web experiences.
	</p>
	<p class="mt-6 text-lg font-light xl:text-xl">
		Always excited to learn something new. I'm proficient in many languages/frameworks and strive to
		deliver high quality results. I've worked on a variety of projects, from small internal tools to
		large scale web applications. I'm always looking for new challenges and opportunities to learn.
		Below are a few notable public projects I've worked on.
	</p>
</Section>

<Section>
	<svelte:fragment slot="title">Notable Work</svelte:fragment>

	<WorkGrid>
		<WorkCard>
			<svelte:fragment slot="title">Sonar</svelte:fragment>
			<svelte:fragment slot="description">
				Sonar is a small proof of concept spotify player, designed for large format displays which I
				built to learn Vue.js and the fundamentals of realtime cross device reactivity. The project
				uses the Spotify Connect API to allow users to control playback on their devices.
			</svelte:fragment>
			<svelte:fragment slot="actions">
				<ButtonLink href="https://github.com/actuallyjamez/sonar">View source</ButtonLink>
				<ButtonLink href="https://sonar.now.sh">Try it out!</ButtonLink>
			</svelte:fragment>
		</WorkCard>

		<WorkCard>
			<svelte:fragment slot="title">drHEADer</svelte:fragment>
			<svelte:fragment slot="description">
				drHEADer is a simple, lightweight, and fully customizable header auditing tool. It validates
				HTTP headers against safe defaults and can generate JUnit reports for straight forward
				integration with other tools. It's built with Python and is mentioned in the OWASP secure
				headers project.
			</svelte:fragment>
			<svelte:fragment slot="actions">
				<ButtonLink href="https://github.com/Santandersecurityresearch/DrHeader">
					View source
				</ButtonLink>
			</svelte:fragment>
		</WorkCard>

		<WorkCard>
			<svelte:fragment slot="title">Live Enhancement Suite</svelte:fragment>
			<svelte:fragment slot="description">
				The Live Enhancement Suite is a collection of macros designed to enhance the experience of
				working with Ableton Live. I wrote the MacOS installer as an exercise in learning Electron,
				and desktop application development. The project remains open source and is actively used by
				award winning musicians.
			</svelte:fragment>
			<svelte:fragment slot="actions">
				<ButtonLink href="https://enhancementsuite.me">Check it out</ButtonLink>
			</svelte:fragment>
		</WorkCard>

		<WorkCard>
			<svelte:fragment slot="title">Redways Payment Gateway</svelte:fragment>
			<svelte:fragment slot="description">
				My local badminton club needed a solution to accept payments for membership and playing
				fees. I took the opportunity to learn about Stripes payment gateway and built a simple web
				app using Next.js and Stripe Checkout. All pricing information is manged by Stripe Products,
				and dynamically fetched by the app.
			</svelte:fragment>
		</WorkCard>
	</WorkGrid>
</Section>
