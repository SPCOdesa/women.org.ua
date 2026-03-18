<script>
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Directions from "./pages/Directions.svelte";
  import Media from "./pages/Media.svelte";
  import Policies from "./pages/Policies.svelte";
  import Tenders from "./pages/Tenders.svelte";
  import Partners from "./pages/Partners.svelte";
  import Contacts from "./pages/Contacts.svelte";
  import AnnualReports from "./pages/AnnualReports.svelte";
  import { currentTheme } from "./lib/stores";
  import { applyTheme, defaultTheme } from "./lib/theme";

  const routes = {
    "/": Home,
    "/about": About,
    "/directions": Directions,
    "/media": Media,
    "/policies": Policies,
    "/tenders": Tenders,
    "/partners": Partners,
    "/contacts": Contacts,
    "/annual-reports": AnnualReports,
  };

  onMount(() => {
    // Initialize theme on mount
    applyTheme(defaultTheme);
  });
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex-1">
    <Router {routes} />
  </main>
  <Footer />
</div>
