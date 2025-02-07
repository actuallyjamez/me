<script>
	import '../app.css';

	const { children } = $props();
</script>

<div class="mx-auto max-w-7xl">
	{@render children()}
</div>

<footer class="my-8 flex justify-center">
	<a
		href="https://twitter.com/actuallyjamez"
		rel="noopener noreferrer"
		target="_blank"
		class="opacity-50 transition-opacity hover:opacity-100"
	>
		made by me
	</a>
</footer>
