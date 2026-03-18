<script>
  export let className = "";
</script>

<div class={`rounded-3xl border bg-white shadow-sm ${className}`}>
  <slot />
</div>
