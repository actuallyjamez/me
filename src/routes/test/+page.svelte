<script lang="ts">
	export let data;
</script>

{#await data.ayo.yoo}
	yoo?
{:then yoo}
	{yoo}
{:catch error}
	{error}
{/await}
