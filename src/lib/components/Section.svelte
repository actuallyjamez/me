<div class="relative px-8 pt-12 md:pt-20 md:flex items-start">
  <aside
      class="text-xl md:inline-block flex-[0_0_25%] font-medium pb-12 md:sticky md:top-28 hidden"
  >
    <slot name="title"/>
  </aside>
  <main class="w-full">
    <slot/>
  </main>
</div>