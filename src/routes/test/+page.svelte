<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#await data.defer.thing}
	yoo?
{:then data}
	{data}
{:catch error}
	{error}
{/await}
