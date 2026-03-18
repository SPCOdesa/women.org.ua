<script>
  import { t } from "../lib/stores";
  import Hero from "../components/Hero.svelte";
  import TendersGrid from "../components/TendersGrid.svelte";
  import tendersData from "../../content/data/tenders.json";

  let activeTab = "current";

  const currentTenders = tendersData.current || [];
  const archivedTenders = tendersData.archived || [];
</script>

<Hero
  title={activeTab === "current"
    ? $t.tenders.hero.title
    : $t.tenders.hero.title}
  subtitle={activeTab === "current"
    ? $t.tenders.hero.subtitle
    : $t.tenders.hero.subtitle}
/>

<!-- Tabs Section -->
<section
  class="py-12 bg-white border-b"
  style="border-color: var(--color-border);"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex gap-4 justify-center flex-wrap">
      <button
        on:click={() => (activeTab = "current")}
        class="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        class:active={activeTab === "current"}
      >
        {$t.tenders.tabs.current}
      </button>
      <button
        on:click={() => (activeTab = "archive")}
        class="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        class:active={activeTab === "archive"}
      >
        {$t.tenders.tabs.archive}
      </button>
    </div>
  </div>
</section>

<!-- Content -->
{#if activeTab === "current"}
  <TendersGrid
    tenders={currentTenders}
    title={$t.tenders.titles.current}
    subtitle={$t.tenders.subtitles.current}
  />
{:else}
  <TendersGrid
    tenders={archivedTenders}
    title={$t.tenders.titles.archive}
    subtitle={$t.tenders.subtitles.archive}
  />
{/if}

<style>
  button {
    background: transparent;
    color: var(--color-primaryDark);
    border: 2px solid var(--color-border);
  }

  button.active {
    background: linear-gradient(
      135deg,
      var(--color-primary) 0%,
      var(--color-secondary) 100%
    );
    color: white;
    border: none;
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
  }
</style>
