<script>
  export let title = "";
  export let subtitle = "";
</script>

<!-- Hero Section -->
<section
  class="relative text-white overflow-hidden"
  style="background: linear-gradient(135deg, var(--color-primaryDark) 0%, var(--color-primary) 50%, var(--color-secondary) 100%);"
>
  <div
    class="absolute top-0 left-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl animate-pulse"
  ></div>
  <div
    class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"
  ></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
    <div class="max-w-4xl">
      <h1
        class="text-4xl md:text-5xl font-bold mb-4 gradient-text leading-tight"
      >
        {title}
      </h1>

      <p class="text-lg md:text-xl mb-6 text-white/80 leading-relaxed">
        {subtitle}
      </p>
    </div>
  </div>
</section>
