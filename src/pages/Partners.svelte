<script>
  import { t, language } from "../lib/stores";
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import partnersJson from "../../content/data/partners.json";

  const partnersData = partnersJson.partners || [];
</script>

<Hero title={$t.partners.hero.title} subtitle={$t.partners.hero.subtitle} />

<div class="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2
        class="text-4xl md:text-5xl font-bold mb-4"
        style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
      >
        {$language === "uk" ? "Наші партнери" : "Our Partners"}
      </h2>
      <div
        class="h-1 w-24 rounded-full mx-auto"
        style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
      ></div>
    </div>

    <!-- Partners Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {#each partnersData as partner}
        <Card
          className="border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group flex flex-col items-center justify-center p-6 h-48"
          style="background: linear-gradient(135deg, var(--color-white) 0%, var(--color-primaryLight) 100%);"
        >
          <div class="flex-1 flex items-center justify-center w-full mb-4">
            <img
              src={partner.logo}
              alt={partner.name}
              class="max-w-full max-h-24 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p
            class="text-sm font-semibold text-center leading-tight"
            style="color: var(--color-gray700);"
          >
            {partner.name}
          </p>
        </Card>
      {/each}
    </div>
  </div>
</div>
