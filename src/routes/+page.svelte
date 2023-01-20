<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import CityImage from '$lib/images/city.webp';
	import EngineerImage from '$lib/images/engineer.webp';
	import SantanderImage from '$lib/images/santander.jpg';
	import Section from '$lib/components/Section.svelte';
	import WorkGrid from '$lib/components/WorkGrid.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';
	import { fly } from 'svelte/transition';

	function easeInOutExpo(x: number): number {
		return x === 0
			? 0
			: x === 1
			? 1
			: x < 0.5
			? Math.pow(2, 20 * x - 10) / 2
			: (2 - Math.pow(2, -20 * x + 10)) / 2;
	}

	type WithTarget<Event, Target> = Event & { currentTarget: Target };

	let images = [
		'https://media.tenor.com/IXx91fddegMAAAAd/laptop-browsing.gif',
		SantanderImage,
		CityImage
	];

	let currentImage: string | undefined = undefined;

	function handleMouseEnter(image: string) {
		currentImage = image;
	}

	function handleMouseLeave() {
		currentImage = undefined;
	}
</script>

<svelte:head>
	<title>James Morris</title>
</svelte:head>

<div class="sticky flex top-0 p-8 z-50 lg: -ml-4">
	<Nav />
</div>

<div class="relative px-8 py-10">
	{#each images as image}
		{#if currentImage == image}
			<img
				transition:fly={{
					x: 10,
					duration: 400,
					easing: easeInOutExpo
				}}
				src={image}
				alt=""
				class="object-cover aspect-video absolute right-0 rounded-xl shadow-2xl mx-8 max-w-3xl pointer-events-none"
			/>
		{/if}
	{/each}

	<h1 class="text-3xl xl:text-4xl font-medium">James Morris</h1>
	<p class="text-lg xl:text-xl max-w-md mt-6 font-light z-40" on:mouseleave={handleMouseLeave}>
		Cool person from <span
			class="font-normal cursor-cell"
			on:mouseenter={() => (currentImage = CityImage)}
			on:mouseleave={() => (currentImage = undefined)}
		>
			Northampton, United Kingdom.
		</span>
		Currently working as a
		<span
			class="font-normal cursor-cell"
			on:mouseenter={() =>
				(currentImage = 'https://media.tenor.com/IXx91fddegMAAAAd/laptop-browsing.gif')}
			on:mouseleave={() => (currentImage = undefined)}
		>
			Software Engineer
		</span>
		at a company called
		<span
			class="font-normal cursor-cell"
			on:mouseenter={() => (currentImage = SantanderImage)}
			on:mouseleave={() => (currentImage = undefined)}
		>
			Santander.
		</span>
	</p>

	<div class="pt-8 relative">
		<ButtonLink href="mailto:hey@jamesmorris.co">Request resume</ButtonLink>
	</div>
</div>

<Section class="">
	<svelte:fragment slot="title">About</svelte:fragment>

	<p class="text-2xl xl:text-3xl ">
		I am a customer-focused full-stack software programmer with experience in creating performant
		and engaging web experiences.
	</p>
	<p class="font-light text-lg xl:text-xl mt-6">
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
				Sonar was an small proof of concept spotify player, designed for large format displays which
				I built to learn Vue.js and the fundamentals of realtime cross device reactivity. The
				project uses the Spotify Connect API to allow users to control playback on their devices.
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
				and desktop application development. The project remains open source and is active used by
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
