<script>
  import { t } from "../lib/stores";
  import Hero from "../components/Hero.svelte";
  import Card from "../components/Card.svelte";
  import {
    ClipboardList,
    Building2,
    Landmark,
    HandHeart,
    PackageSearch,
    Briefcase,
    BookOpen,
    FileText,
    ShoppingBasket,
    Car,
    Sparkles,
    Home,
    Wifi,
    Stethoscope,
    Baby,
    Shirt,
    Brain,
    Users,
    Palette,
    HeartPulse,
    UserRound,
    FlaskConical,
    Hospital,
    GraduationCap,
    TestTube,
    Scale,
    Banknote,
    UserCheck,
    FileSearch,
    Globe,
    MapPin,
    RefreshCw,
  } from "lucide-svelte";

  const socialIcons = [
    ClipboardList,
    Building2,
    Landmark,
    HandHeart,
    PackageSearch,
    Briefcase,
    BookOpen,
    FileText,
  ];
  const humanitarianIcons = [
    ShoppingBasket,
    Car,
    Sparkles,
    Home,
    Wifi,
    Stethoscope,
    Baby,
    Shirt,
  ];
  const psychologicalIcons = [
    Brain,
    Users,
    Palette,
    HeartPulse,
    UserRound,
    FlaskConical,
    Hospital,
    GraduationCap,
    TestTube,
  ];
  const otherIcons = [
    Scale,
    Banknote,
    UserCheck,
    Briefcase,
    FileSearch,
    Globe,
    MapPin,
    RefreshCw,
  ];
</script>

<Hero title={$t.directions.hero.title} subtitle={$t.directions.hero.subtitle} />

<!-- Services Sections -->
<div class="py-24 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Social Services -->
    <section class="mb-24">
      <div class="mb-12">
        <h2
          class="text-4xl md:text-5xl font-bold mb-4"
          style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
        >
          {$t.directions.social.title}
        </h2>
        <div
          class="h-1 w-24 rounded-full"
          style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
        ></div>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        {#each $t.directions.social.services as service, i}
          <Card
            className="border-0 rounded-2xl overflow-hidden"
            style="background: linear-gradient(135deg, var(--color-white) 0%, var(--color-primaryLight) 100%);"
          >
            <div class="p-6 flex items-start space-x-4">
              <div class="flex-shrink-0 mt-1">
                <div
                  class="flex items-center justify-center h-8 w-8 rounded-full"
                  style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
                >
                  <svelte:component
                    this={socialIcons[i % socialIcons.length]}
                    class="h-4 w-4 text-white"
                  />
                </div>
              </div>
              <p class="leading-relaxed" style="color: var(--color-gray700);">
                {service}
              </p>
            </div>
          </Card>
        {/each}
      </div>
    </section>

    <!-- Humanitarian Services -->
    <section class="mb-24">
      <div class="mb-12">
        <h2
          class="text-4xl md:text-5xl font-bold mb-4"
          style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
        >
          {$t.directions.humanitarian.title}
        </h2>
        <div
          class="h-1 w-24 rounded-full"
          style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
        ></div>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        {#each $t.directions.humanitarian.services as service, i}
          <Card
            className="border-0 rounded-2xl overflow-hidden"
            style="background: linear-gradient(135deg, var(--color-white) 0%, var(--color-primaryLight) 100%);"
          >
            <div class="p-6 flex items-start space-x-4">
              <div class="flex-shrink-0 mt-1">
                <div
                  class="flex items-center justify-center h-8 w-8 rounded-full"
                  style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
                >
                  <svelte:component
                    this={humanitarianIcons[i % humanitarianIcons.length]}
                    class="h-4 w-4 text-white"
                  />
                </div>
              </div>
              <p class="leading-relaxed" style="color: var(--color-gray700);">
                {service}
              </p>
            </div>
          </Card>
        {/each}
      </div>
    </section>

    <!-- Psychological and Medical Services -->
    <section class="mb-24">
      <div class="mb-12">
        <h2
          class="text-4xl md:text-5xl font-bold mb-4"
          style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
        >
          {$t.directions.psychological.title}
        </h2>
        <div
          class="h-1 w-24 rounded-full"
          style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
        ></div>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        {#each $t.directions.psychological.services as service, i}
          <Card
            className="border-0 rounded-2xl overflow-hidden"
            style="background: linear-gradient(135deg, var(--color-white) 0%, var(--color-primaryLight) 100%);"
          >
            <div class="p-6 flex items-start space-x-4">
              <div class="flex-shrink-0 mt-1">
                <div
                  class="flex items-center justify-center h-8 w-8 rounded-full"
                  style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
                >
                  <svelte:component
                    this={psychologicalIcons[i % psychologicalIcons.length]}
                    class="h-4 w-4 text-white"
                  />
                </div>
              </div>
              <p class="leading-relaxed" style="color: var(--color-gray700);">
                {service}
              </p>
            </div>
          </Card>
        {/each}
      </div>
    </section>

    <!-- Other Services -->
    <section>
      <div class="mb-12">
        <h2
          class="text-4xl md:text-5xl font-bold mb-4"
          style="background: linear-gradient(to right, var(--color-primaryDark), var(--color-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
        >
          {$t.directions.other.title}
        </h2>
        <div
          class="h-1 w-24 rounded-full"
          style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
        ></div>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        {#each $t.directions.other.services as service, i}
          <Card
            className="border-0 rounded-2xl overflow-hidden"
            style="background: linear-gradient(135deg, var(--color-white) 0%, var(--color-primaryLight) 100%);"
          >
            <div class="p-6 flex items-start space-x-4">
              <div class="flex-shrink-0 mt-1">
                <div
                  class="flex items-center justify-center h-8 w-8 rounded-full"
                  style="background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);"
                >
                  <svelte:component
                    this={otherIcons[i % otherIcons.length]}
                    class="h-4 w-4 text-white"
                  />
                </div>
              </div>
              <p class="leading-relaxed" style="color: var(--color-gray700);">
                {service}
              </p>
            </div>
          </Card>
        {/each}
      </div>
    </section>
  </div>
</div>
