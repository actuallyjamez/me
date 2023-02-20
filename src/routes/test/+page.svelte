<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#await data.ayo.yoo}
	yoo?
{:then yoo}
	{yoo}
{:catch error}
	{error}
{/await}
