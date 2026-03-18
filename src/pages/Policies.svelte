<script>
  import { t } from "../lib/stores";
  import Hero from "../components/Hero.svelte";
  import PoliciesGrid from "../components/PoliciesGrid.svelte";
  import policiesJson from "../../content/data/policies.json";

  const policies = policiesJson.policies || [];
</script>

<Hero title={$t.policies.hero.title} subtitle={$t.policies.hero.subtitle} />

<PoliciesGrid {policies} />
