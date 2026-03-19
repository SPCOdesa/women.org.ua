<script>
  import { t, language } from "../lib/stores";
  import Hero from "../components/Hero.svelte";
  import Gallery from "../components/Gallery.svelte";
  import mediaJson from "../../content/data/media.json";

  $: galleryImages = (mediaJson.images || [])
    .map((img) => ({
      src: img.src,
      alt: $language === "uk" ? img.alt : img.altEn || img.alt,
    }))
    .reverse();
</script>

<Hero title={$t.media.hero.title} subtitle={$t.media.hero.subtitle} />

<Gallery images={galleryImages} title="ФОТОГАЛЕРЕЯ НАШОЇ РОБОТИ" />
