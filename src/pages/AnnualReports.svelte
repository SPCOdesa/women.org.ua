<script>
  import { t } from "../lib/stores";
  import Hero from "../components/Hero.svelte";
  import { Mail } from "lucide-svelte";
  import reportsData from "../../content/data/annual-reports.json";

  const annualReports = reportsData.reports || [];
</script>

<Hero
  title={$t.policies.annualReports.title}
  subtitle={$t.policies.annualReports.subtitle}
/>

<section class="py-24" style="background: var(--color-white);">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex flex-wrap justify-center gap-10">
      {#each annualReports as report}
        <div class="flex flex-col items-center group" style="max-width: 280px;">
          <!-- Cover image -->
          <div
            class="rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 w-full"
            style="box-shadow: 0 8px 32px var(--color-primary)33;"
          >
            <img
              src={report.coverImage}
              alt="Annual Report {report.year}"
              class="w-full object-cover"
              style="aspect-ratio: 3/4;"
            />
          </div>

          <!-- Year label -->
          <p
            class="mt-4 text-2xl font-bold"
            style="color: var(--color-primaryDark);"
          >
            {report.year}
          </p>

          <!-- Contact note -->
          <div
            class="mt-4 rounded-2xl p-5 text-center w-full"
            style="background: linear-gradient(135deg, var(--color-white) 0%, var(--color-primaryLight) 100%); border: 1px solid var(--color-border);"
          >
            <p class="text-sm mb-4" style="color: var(--color-gray700);">
              {$t.policies.annualReports.contactNote}
            </p>
            <a
              href="#/contacts"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
              style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%); color: white;"
            >
              <Mail class="h-4 w-4" />
              {$t.policies.annualReports.contactLink}
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
