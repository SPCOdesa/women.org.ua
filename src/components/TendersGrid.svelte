<script>
  import { FileText, ExternalLink, Calendar } from "lucide-svelte";
  import Card from "./Card.svelte";
  import { t, language } from "../lib/stores";

  export let tenders = [];
  export let title = "ВІДКРИТІ ТЕНДЕРИ";
  export let subtitle = "Актуальні конкурси та закупівлі організації";
</script>

<section class="py-24 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
      <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>

    <!-- Tenders Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each tenders as tender}
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
              {tender.title}
            </h3>

            <!-- Description -->
            {#if tender.description}
              <p
                class="text-sm mb-4 flex-grow"
                style="color: var(--color-gray600);"
              >
                {tender.description}
              </p>
            {/if}

            <!-- Dates -->
            <div class="space-y-2 mb-6">
              <div class="flex items-start gap-2">
                <Calendar
                  class="h-4 w-4 mt-0.5 flex-shrink-0"
                  style="color: var(--color-primary);"
                />
                <div class="text-sm">
                  <p
                    class="font-semibold"
                    style="color: var(--color-primaryDark);"
                  >
                    {$t.tenders.grid.startDate}
                  </p>
                  <p style="color: var(--color-gray600);">{tender.startDate}</p>
                </div>
              </div>
              <div class="flex items-start gap-2">
                <Calendar
                  class="h-4 w-4 mt-0.5 flex-shrink-0"
                  style="color: var(--color-secondary);"
                />
                <div class="text-sm">
                  <p
                    class="font-semibold"
                    style="color: var(--color-primaryDark);"
                  >
                    {$t.tenders.grid.endDate}
                  </p>
                  <p style="color: var(--color-gray600);">{tender.endDate}</p>
                </div>
              </div>
            </div>

            <!-- Action Button -->
            <a
              href={tender.link}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 w-full"
              style="background: var(--color-primary); color: white;"
            >
              <ExternalLink class="h-4 w-4" />
              {$t.tenders.grid.viewTender}
            </a>
          </div>
        </Card>
      {/each}
    </div>

    {#if tenders.length === 0}
      <div class="text-center py-12">
        <p class="text-gray-600 text-lg">{$t.tenders.grid.noTenders}</p>
      </div>
    {/if}
  </div>
</section>
