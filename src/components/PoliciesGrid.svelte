<script>
  import { FileText, Download, Eye } from "lucide-svelte";
  import Card from "./Card.svelte";
  import { t, language } from "../lib/stores";

  export let policies = [];

  let selectedPdf = null;

  function openPdf(policy) {
    selectedPdf = policy;
  }

  function closePdf() {
    selectedPdf = null;
  }

  function downloadPdf(policy) {
    const link = document.createElement("a");
    link.href = policy.file || policy.path;
    link.download = policy.name;
    link.click();
  }

  function handleKeydown(e) {
    if (e.key === "Escape") closePdf();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="py-24 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold mb-4"
        style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
      >
        {$t.policies.grid.title}
      </h2>
      <div
        class="h-1 w-24 rounded-full mx-auto"
        style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
      ></div>
      <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
        {$t.policies.grid.subtitle}
      </p>
    </div>

    <!-- Policies Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each policies as policy}
        <Card
          className="border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          style="background: linear-gradient(135deg, var(--color-white) 0%, var(--color-primaryLight) 100%);"
        >
          <div class="p-8 flex flex-col h-full">
            <!-- Icon -->
            <div class="mb-6">
              <div
                class="h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
              >
                <FileText class="h-8 w-8 text-white" />
              </div>
            </div>

            <!-- Title -->
            <h3
              class="text-xl font-bold mb-3 flex-grow"
              style="color: var(--color-primaryDark);"
            >
              {$language === "uk" ? policy.name : policy.nameEn}
            </h3>

            <!-- Description -->
            {#if $language === "uk" ? policy.description : policy.descriptionEn}
              <p
                class="text-sm mb-6 flex-grow"
                style="color: var(--color-gray600);"
              >
                {$language === "uk" ? policy.description : policy.descriptionEn}
              </p>
            {/if}

            <!-- Actions -->
            <div
              class="flex gap-3 pt-4 border-t"
              style="border-color: var(--color-border);"
            >
              <button
                on:click={() => openPdf(policy)}
                class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style="background: var(--color-primary); color: white;"
                title={$t.policies.grid.view}
              >
                <Eye class="h-4 w-4" />
                <span class="hidden sm:inline">{$t.policies.grid.view}</span>
              </button>
              <button
                on:click={() => downloadPdf(policy)}
                class="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style="background: var(--color-secondary); color: white;"
                title={$t.policies.grid.download}
              >
                <Download class="h-4 w-4" />
                <span class="hidden sm:inline">{$t.policies.grid.download}</span
                >
              </button>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>

<!-- PDF Viewer Modal -->
{#if selectedPdf}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    on:click={closePdf}
    role="dialog"
    aria-modal="true"
  >
    <div
      class="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl"
      on:click={(e) => e.stopPropagation()}
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between p-6 border-b"
        style="border-color: var(--color-border);"
      >
        <div class="flex items-center gap-3">
          <FileText class="h-6 w-6" style="color: var(--color-primary);" />
          <div>
            <h3
              class="font-bold text-lg"
              style="color: var(--color-primaryDark);"
            >
              {$language === "uk" ? selectedPdf.name : selectedPdf.nameEn}
            </h3>
            <p class="text-sm" style="color: var(--color-gray600);">
              {$t.policies.grid.pdfDocument}
            </p>
          </div>
        </div>
        <button
          on:click={closePdf}
          class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- PDF Viewer -->
      <div class="flex-1 overflow-auto bg-gray-50">
        <iframe
          src="{selectedPdf.file || selectedPdf.path}#toolbar=0"
          class="w-full"
          style="height: 100%; min-height: 600px;"
          title="PDF Viewer"
        />
      </div>

      <!-- Footer -->
      <div
        class="flex items-center justify-between p-4 border-t"
        style="border-color: var(--color-border);"
      >
        <p class="text-sm" style="color: var(--color-gray600);">
          {$t.policies.grid.pressEsc}
        </p>
        <button
          on:click={() => downloadPdf(selectedPdf)}
          class="flex items-center gap-2 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          style="background: var(--color-primary); color: white;"
        >
          <Download class="h-4 w-4" />
          {$t.policies.grid.download}
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  :global(body.pdf-modal-open) {
    overflow: hidden;
  }
</style>
