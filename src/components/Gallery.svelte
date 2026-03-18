<script>
  import { X } from "lucide-svelte";
  import Card from "./Card.svelte";

  export let images = [];
  export let title = "";

  let selectedImage = null;
  let currentIndex = 0;

  function openImage(index) {
    currentIndex = index;
    selectedImage = images[index];
  }

  function closeModal() {
    selectedImage = null;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    selectedImage = images[currentIndex];
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    selectedImage = images[currentIndex];
  }

  function handleKeydown(e) {
    if (!selectedImage) return;
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeModal();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="py-24 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {#if title}
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold mb-4"
          style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
        >
          {title}
        </h2>
        <div
          class="h-1 w-24 rounded-full mx-auto"
          style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
        ></div>
      </div>
    {/if}

    <!-- Gallery Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each images as image, index}
        <button
          on:click={() => openImage(index)}
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style="focus-ring-color: var(--color-primary);"
        >
          <Card className="border-0 rounded-2xl overflow-hidden p-0 h-64">
            <img
              src={image.src}
              alt={image.alt}
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
            >
              <p class="text-white font-semibold text-sm">{image.alt}</p>
            </div>
          </Card>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- Modal -->
{#if selectedImage}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    on:click={closeModal}
    role="dialog"
    aria-modal="true"
  >
    <div
      class="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
      on:click={(e) => e.stopPropagation()}
    >
      <!-- Close Button -->
      <button
        on:click={closeModal}
        class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close modal"
      >
        <X class="h-8 w-8" />
      </button>

      <!-- Image Container -->
      <div
        class="relative flex-1 flex items-center justify-center overflow-hidden rounded-2xl"
      >
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          class="max-w-full max-h-full object-contain"
        />
      </div>

      <!-- Image Info -->
      <div
        class="mt-4 p-4 rounded-xl text-center"
        style="background: rgba(0, 0, 0, 0.5);"
      >
        <p class="text-white font-semibold">{selectedImage.alt}</p>
        <p class="text-gray-300 text-sm mt-2">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-between items-center mt-4 gap-4">
        <button
          on:click={prevImage}
          class="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          style="background: var(--color-primary); color: white;"
          aria-label="Previous image"
        >
          ← Попередня
        </button>

        <div class="flex gap-2">
          {#each images as _, i}
            <button
              on:click={() => openImage(i)}
              class="h-2 rounded-full transition-all duration-300"
              style="background: {i === currentIndex
                ? 'var(--color-secondary)'
                : 'rgba(255, 255, 255, 0.3)'}; width: {i === currentIndex
                ? '24px'
                : '8px'};"
              aria-label="Go to image {i + 1}"
            ></button>
          {/each}
        </div>

        <button
          on:click={nextImage}
          class="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          style="background: var(--color-primary); color: white;"
          aria-label="Next image"
        >
          Наступна →
        </button>
      </div>

      <!-- Keyboard Hint -->
      <p class="text-gray-400 text-xs text-center mt-4">
        Використовуйте стрілки ← → для навігації або ESC для закриття
      </p>
    </div>
  </div>
{/if}

<style>
  :global(body.modal-open) {
    overflow: hidden;
  }
</style>
