<script lang="ts">
	export let href: string;
</script>

<a
	class="after:content-['_↗'] bg-black/5 border px-3 py-1.5 rounded-full hover:bg-black/10 border-black/5 transition-colors active:bg-black/20"
	{href}
>
	<slot />
</a>
