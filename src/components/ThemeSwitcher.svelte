<script>
  import { currentTheme } from "../lib/stores";
  import { themes } from "../lib/theme";
  import { Palette } from "lucide-svelte";

  let isOpen = false;
  const themeList = Object.entries(themes).map(([key, value]) => ({
    key,
    name: value.name,
  }));

  function selectTheme(key) {
    console.log("Switching to theme:", key);
    currentTheme.set(key);
    isOpen = false;
  }
</script>

<div class="relative">
  <!-- <button
    on:click={() => (isOpen = !isOpen)}
    class="flex items-center space-x-2 rounded-xl px-3 py-2 transition-colors"
    style="background-color: var(--color-primaryLight);"
    title="Переключить тему"
  >
    <Palette class="h-4 w-4" style="color: var(--color-gray600);" />
    <span
      class="text-xs font-semibold hidden sm:inline"
      style="color: var(--color-gray600);">Тема</span
    >
  </button> -->

  {#if isOpen}
    <div
      class="absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-50"
      style="background-color: var(--color-white); border: 1px solid var(--color-border);"
    >
      <div class="p-3" style="border-bottom: 1px solid var(--color-border);">
        <p
          class="text-xs font-semibold uppercase"
          style="color: var(--color-gray600);"
        >
          Выберите тему
        </p>
      </div>
      <div class="p-2 space-y-1">
        {#each themeList as { key, name }}
          <button
            on:click={() => selectTheme(key)}
            class={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              $currentTheme === key ? "font-semibold text-white" : ""
            }`}
            style={$currentTheme === key
              ? `background-color: var(--color-primary); color: white;`
              : `color: var(--color-gray700);`}
          >
            {name}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
