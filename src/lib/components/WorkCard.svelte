<div class="pb-20" on:mouseenter on:mouseleave>
  <h1 class="text-lg font-medium">
    <slot name="title"/>
  </h1>

  <p class="font-light text-lg max-w-md mt-4 leading-snug">
    <slot name="description"/>
  </p>

  <div class="pt-6 flex space-x-3">
    <slot name="actions"/>
  </div>
</div>