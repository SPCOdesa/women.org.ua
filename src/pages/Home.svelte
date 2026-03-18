<script>
  import { link } from "svelte-spa-router";
  import {
    ArrowRight,
    Heart,
    Users,
    Stethoscope,
    BookOpen,
    UserCircle2,
    Sparkles,
    Shield,
    TrendingUp,
    Zap,
  } from "lucide-svelte";
  import { t } from "../lib/stores";
  import Card from "../components/Card.svelte";
  import Hero from "../components/Hero.svelte";
  import OrganizationStructure from "../components/OrganizationStructure.svelte";

  const boardImage = "/images/board.jpg";

  $: services = [
    {
      icon: Sparkles,
      title: $t.home.services.testing.title,
      description: $t.home.services.testing.description,
    },
    {
      icon: Shield,
      title: $t.home.services.support.title,
      description: $t.home.services.support.description,
    },
    {
      icon: Heart,
      title: $t.home.services.medical.title,
      description: $t.home.services.medical.description,
    },
    {
      icon: TrendingUp,
      title: $t.home.services.education.title,
      description: $t.home.services.education.description,
    },
  ];
</script>

<div>
  <!-- Hero Section for home (отличается от других страниц) -->
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

    <div class="absolute inset-0 opacity-10">
      <img
        src="/images/bg_home.jpg"
        alt="Hero background"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
      <div class="max-w-4xl">
        <div class="inline-block mb-8">
          <div
            class="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-12 py-4"
          >
            <span class="text-xl font-semibold text-white"
              >Громадська Організація Жіночий Центр</span
            >
          </div>
        </div>

        <h1
          class="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight"
        >
          "{$t.home.hero.title}"
        </h1>

        <p class="text-xl md:text-2xl mb-10 text-white/80 leading-relaxed">
          {$t.home.hero.subtitle}
        </p>

        <a href="/about" use:link>
          <button
            class="group gradient-button text-white border-0 shadow-2xl shadow-primary hover:shadow-primary transition-all duration-300 px-8 py-6 text-lg rounded-2xl font-medium"
          >
            {$t.home.hero.cta}
            <ArrowRight
              class="ml-2 h-5 w-5 inline group-hover:translate-x-2 transition-transform duration-300"
            />
          </button>
        </a>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section
    class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
  >
    <div
      class="absolute top-20 right-0 w-72 h-72 bg-primary-light/50 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
    ></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
          {$t.home.services.title}
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each services as service, index}
          <Card
            className="group text-center hover:shadow-2xl transition-all duration-500 border-0 gradient-card hover:scale-105 overflow-hidden relative"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-500"
            ></div>
            <div class="relative p-6">
              <div
                class="mx-auto h-20 w-20 rounded-3xl gradient-button flex items-center justify-center mb-6 shadow-xl shadow-primary group-hover:shadow-primary group-hover:scale-110 transition-all duration-500"
              >
                <svelte:component
                  this={service.icon}
                  class="h-10 w-10 text-white"
                />
              </div>
              <p class="text-lg text-gray-700 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          </Card>
        {/each}
      </div>
    </div>
  </section>

  <!-- Board Section -->
  <section class="py-24 bg-white relative overflow-hidden">
    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
          {$t.home.board.title}
        </h2>
      </div>

      <OrganizationStructure structure={$t.home.board.structure} />
    </div>
  </section>

  <!-- CTA Section -->
  <section
    class="relative py-24 text-white overflow-hidden"
    style="background: linear-gradient(135deg, var(--color-primaryDark) 0%, var(--color-primary) 50%, var(--color-secondary) 100%);"
  >
    <div
      class="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-700"
    ></div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <div
        class="inline-block mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
      >
        <Heart class="h-16 w-16 text-white fill-white mx-auto" />
      </div>

      <h2 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">
        {$t.contacts.hotline.title}
      </h2>

      <p class="text-xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
        {$t.contacts.hotline.text}
      </p>

      <div
        class="inline-block bg-white/10 backdrop-blur-sm border border-white/30 rounded-3xl px-12 py-6 mb-10"
      >
        <div class="text-5xl md:text-6xl font-bold text-white tracking-wider">
          {$t.contacts.hotline.number}
        </div>
      </div>

      <div>
        <a href="/contacts" use:link>
          <button
            class="bg-white text-primary-dark hover:bg-gray-100 border-0 shadow-2xl shadow-white/20 hover:shadow-white/30 transition-all duration-300 px-10 py-6 text-lg rounded-2xl font-semibold"
          >
            {$t.nav.contacts}
            <ArrowRight class="ml-2 h-5 w-5 inline" />
          </button>
        </a>
      </div>
    </div>
  </section>
</div>
