<script>
  import { link, location } from "svelte-spa-router";
  import { Menu, X, Globe, Heart, ChevronDown } from "lucide-svelte";
  import { language, t } from "../lib/stores";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";

  let mobileMenuOpen = false;
  let dropdownOpen = false;

  $: navigation = [
    { name: $t.nav.about, href: "/about" },
    { name: $t.nav.directions, href: "/directions" },
    { name: $t.nav.partners, href: "/partners" },
  ];

  $: documentsMenu = [
    { name: $t.nav.policies, href: "/policies" },
    { name: $t.nav.tenders, href: "/tenders" },
    { name: $t.nav.annualReports, href: "/annual-reports" },
  ];

  $: lastNavigation = [
    { name: $t.nav.media, href: "/media" },
    { name: $t.nav.contacts, href: "/contacts" },
  ];

  function setLanguage(lang) {
    language.set(lang);
  }

  function handleLinkClick() {
    mobileMenuOpen = false;
    dropdownOpen = false;
  }
</script>

<header
  class="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50"
  style="border-bottom-color: var(--color-border);"
>
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-20 items-center justify-between">
      <div class="flex items-center logo h-16">
        <a href="/" use:link class="flex items-center w-full h-full">
          <img
            src={$language === "uk"
              ? "/images/logo.png"
              : "/images/logo_en.png"}
            alt="logo"
            class="max-h-full max-w-full object-contain"
          />
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex lg:items-center lg:space-x-2">
        {#each navigation as item}
          <a
            href={item.href}
            use:link
            class={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
              $location === item.href
                ? "gradient-button text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {item.name}
          </a>
        {/each}

        <!-- Documents Dropdown -->
        <div class="relative">
          <button
            on:click={() => (dropdownOpen = !dropdownOpen)}
            class={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 flex items-center gap-1 ${
              documentsMenu.some((item) => $location === item.href)
                ? "gradient-button text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {$t.documents.title}
            <ChevronDown
              class="h-4 w-4 transition-transform duration-300"
              style="transform: {dropdownOpen ? 'rotate(180deg)' : 'rotate(0)'}"
            />
          </button>

          {#if dropdownOpen}
            <div
              class="absolute right-0 mt-2 w-56 rounded-xl shadow-xl bg-white border z-50"
              style="border-color: var(--color-border);"
            >
              {#each documentsMenu as item}
                <a
                  href={item.href}
                  use:link
                  on:click={() => (dropdownOpen = false)}
                  class={`block px-4 py-3 text-sm font-medium transition-all duration-300 first:rounded-t-xl last:rounded-b-xl ${
                    $location === item.href
                      ? "text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                  style="background: {$location === item.href
                    ? 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
                    : 'transparent'}"
                >
                  {item.name}
                </a>
              {/each}
            </div>
          {/if}
        </div>

        {#each lastNavigation as item}
          <a
            href={item.href}
            use:link
            class={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
              $location === item.href
                ? "gradient-button text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {item.name}
          </a>
        {/each}

        <ThemeSwitcher />

        <!-- Language Dropdown -->
        <div class="relative group" role="button" tabindex="0">
          <button
            class="flex items-center space-x-1 rounded-xl px-3 py-2 transition-colors"
            style="background-color: var(--color-primaryLight);"
          >
            <Globe class="h-4 w-4" style="color: var(--color-primary);" />
            <span class="font-semibold" style="color: var(--color-primary);"
              >{$language === "uk" ? "УКР" : "ENG"}</span
            >
            <ChevronDown
              class="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
              style="color: var(--color-primary);"
            />
          </button>

          <div
            class="absolute right-0 mt-2 w-32 rounded-xl shadow-xl bg-white border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            style="border-color: var(--color-border);"
          >
            <button
              on:click={() => setLanguage("uk")}
              class={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 first:rounded-t-xl last:rounded-b-xl ${
                $language === "uk"
                  ? "font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              style="background: {$language === 'uk'
                ? 'var(--color-primaryLight)'
                : 'transparent'}; color: {$language === 'uk'
                ? 'var(--color-primary)'
                : 'var(--color-gray700)'}"
            >
              Українська
            </button>
            <button
              on:click={() => setLanguage("en")}
              class={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 first:rounded-t-xl last:rounded-b-xl ${
                $language === "en"
                  ? "font-semibold"
                  : "text-gray-700 hover:text-gray-900"
              }`}
              style="background: {$language === 'en'
                ? 'var(--color-primaryLight)'
                : 'transparent'}; color: {$language === 'en'
                ? 'var(--color-primary)'
                : 'var(--color-gray700)'}"
            >
              English
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="flex lg:hidden items-center space-x-2">
        <ThemeSwitcher />

        <!-- Mobile Language Dropdown -->
        <div class="relative">
          <button
            on:click={() => (dropdownOpen = !dropdownOpen)}
            class="flex items-center space-x-1 rounded-xl px-3 py-2"
          >
            <Globe class="h-4 w-4" style="color: var(--color-primary);" />
            <span
              class="text-xs font-semibold"
              style="color: var(--color-primary);"
              >{$language === "uk" ? "УКР" : "ENG"}</span
            >
          </button>

          {#if dropdownOpen}
            <div
              class="absolute right-0 mt-2 w-32 rounded-xl shadow-xl bg-white border z-50"
              style="border-color: var(--color-border);"
            >
              <button
                on:click={() => {
                  language.set("uk");
                  dropdownOpen = false;
                }}
                class={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 first:rounded-t-xl last:rounded-b-xl ${
                  $language === "uk"
                    ? "font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                style="background: {$language === 'uk'
                  ? 'var(--color-primaryLight)'
                  : 'transparent'}; color: {$language === 'uk'
                  ? 'var(--color-primary)'
                  : 'var(--color-gray700)'}"
              >
                Українська
              </button>
              <button
                on:click={() => {
                  language.set("en");
                  dropdownOpen = false;
                }}
                class={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 first:rounded-t-xl last:rounded-b-xl ${
                  $language === "en"
                    ? "font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                style="background: {$language === 'en'
                  ? 'var(--color-primaryLight)'
                  : 'transparent'}; color: {$language === 'en'
                  ? 'var(--color-primary)'
                  : 'var(--color-gray700)'}"
              >
                English
              </button>
            </div>
          {/if}
        </div>

        <button
          on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="inline-flex items-center justify-center rounded-xl p-2 transition-colors"
          style="color: var(--color-gray700);"
        >
          {#if mobileMenuOpen}
            <X class="h-6 w-6" />
          {:else}
            <Menu class="h-6 w-6" />
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    {#if mobileMenuOpen}
      <div class="lg:hidden pb-4">
        <div class="space-y-2">
          {#each navigation as item}
            <a
              href={item.href}
              use:link
              on:click={handleLinkClick}
              class={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                $location === item.href
                  ? "gradient-button text-white shadow-lg"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {item.name}
            </a>
          {/each}

          <!-- Mobile Documents Dropdown -->
          <button
            on:click={() => (dropdownOpen = !dropdownOpen)}
            class={`w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 flex items-center justify-between ${
              documentsMenu.some((item) => $location === item.href)
                ? "gradient-button text-white shadow-lg"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {$t.documents.title}
            <ChevronDown
              class="h-4 w-4 transition-transform duration-300"
              style="transform: {dropdownOpen ? 'rotate(180deg)' : 'rotate(0)'}"
            />
          </button>

          {#if dropdownOpen}
            <div class="space-y-2 pl-4">
              {#each documentsMenu as item}
                <a
                  href={item.href}
                  use:link
                  on:click={handleLinkClick}
                  class={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                    $location === item.href
                      ? "gradient-button text-white shadow-lg"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </a>
              {/each}
            </div>
          {/if}

          {#each lastNavigation as item}
            <a
              href={item.href}
              use:link
              on:click={handleLinkClick}
              class={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                $location === item.href
                  ? "gradient-button text-white shadow-lg"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {item.name}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </nav>
</header>
