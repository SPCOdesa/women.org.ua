<script>
  import { t } from "../lib/stores";
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import { Target, Eye, Users } from "lucide-svelte";
</script>

<Hero title={$t.about.hero.title} subtitle={$t.about.hero.subtitle} />

<!-- Mission & Vision Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 gap-12">
      <!-- Mission -->
      <div>
        <div class="flex items-center mb-8">
          <div
            class="h-16 w-16 rounded-3xl flex items-center justify-center mr-4 shadow-xl"
            style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
          >
            <Target class="h-8 w-8 text-white" />
          </div>
          <h2
            class="text-4xl font-bold"
            style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
          >
            {$t.about.mission.title}
          </h2>
        </div>
        <p
          class="text-lg leading-relaxed mb-6"
          style="color: var(--color-gray600);"
        >
          {$t.about.mission.text}
        </p>
        <div class="rounded-lg overflow-hidden shadow-md">
          <img
            src="/images/media/photo_2026-03-18_18-37-13.jpg"
            alt="Mission"
            class="w-full"
          />
        </div>
      </div>

      <!-- Vision -->
      <div>
        <div class="flex items-center mb-8">
          <div
            class="h-16 w-16 rounded-3xl flex items-center justify-center mr-4 shadow-xl"
            style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
          >
            <Eye class="h-8 w-8 text-white" />
          </div>
          <h2
            class="text-4xl font-bold"
            style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
          >
            {$t.about.vision.title}
          </h2>
        </div>
        <p
          class="text-lg leading-relaxed mb-6"
          style="color: var(--color-gray600);"
        >
          {$t.about.vision.text}
        </p>
        <div class="rounded-lg overflow-hidden shadow-md">
          <img
            src="images/media/IMG_20260318_183313_579.jpg"
            alt="Vision"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Beneficiaries Section -->
<section
  class="py-24 relative overflow-hidden"
  style="background: linear-gradient(to bottom, var(--color-gray50), var(--color-white));"
>
  <div
    class="absolute top-20 right-0 w-72 h-72 rounded-full blur-3xl"
    style="background: var(--color-primaryLight); opacity: 0.5;"
  ></div>
  <div
    class="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-3xl"
    style="background: var(--color-secondary); opacity: 0.1;"
  ></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <div class="inline-flex items-center mb-4">
        <div
          class="h-16 w-16 rounded-3xl flex items-center justify-center mr-4 shadow-xl"
          style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
        >
          <Users class="h-8 w-8 text-white" />
        </div>
        <h2
          class="text-4xl md:text-5xl font-bold"
          style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
        >
          {$t.about.beneficiaries.title}
        </h2>
      </div>
    </div>

    <Card
      className="border-0 rounded-3xl overflow-hidden"
      style="background: linear-gradient(135deg, var(--color-white) 0%, var(--color-primaryLight) 100%);"
    >
      <div class="p-8">
        <ul class="space-y-4">
          {#each $t.about.beneficiaries.groups as group}
            <li class="flex items-start space-x-4 group/item">
              <div class="flex-shrink-0 mt-1">
                <div
                  class="flex items-center justify-center h-6 w-6 rounded-full shadow-md group-hover/item:shadow-lg transition-all duration-300"
                  style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
                >
                  <span class="text-white text-sm font-bold">•</span>
                </div>
              </div>
              <p
                class="leading-relaxed group-hover/item:transition-colors duration-300"
                style="color: var(--color-gray700);"
              >
                {group}
              </p>
            </li>
          {/each}
        </ul>
      </div>
    </Card>
  </div>
</section>

<!-- Image Section -->
<section class="py-16 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="rounded-lg overflow-hidden shadow-xl">
      <img
        src="images/media/IMG_20260318_183313_579.jpg"
        alt="Team collaboration"
        class="w-full h-[500px] object-cover"
      />
    </div>
  </div>
</section>
