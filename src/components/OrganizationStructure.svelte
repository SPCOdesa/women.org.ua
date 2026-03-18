<script>
  import { t } from "../lib/stores";

  $: sectors = $t.orgStructure.sectors;
  $: bottom = $t.orgStructure.bottom;
</script>

<div class="org">
  <div class="level">
    <div class="box box-lg green">{$t.orgStructure.generalAssembly}</div>
  </div>

  <div class="dot"></div>

  <div class="level">
    <div class="box box-md blue">{$t.orgStructure.board}</div>
  </div>

  <div class="connector"></div>

  <div class="level sectors">
    {#each sectors as sector}
      <div class="sector">
        <div class="dot"></div>
        <div class="box box-sm orange">{sector}</div>
      </div>
    {/each}
  </div>

  <div class="connector small"></div>

  <div class="level bottom">
    {#each bottom as item}
      <div class="sector">
        <div class="dot"></div>
        <div class="box box-xs red">{item}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .org {
    text-align: center;
    font-family: sans-serif;
  }

  .level {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 15px 0;
  }

  .sectors {
    gap: 25px;
  }

  .bottom {
    gap: 40px;
  }

  .box {
    color: white;
    border-radius: 6px;
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }

  .box:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  /* Size variations */
  .box-lg {
    padding: 16px 36px;
    font-size: 15px;
    min-width: 300px;
  }

  .box-md {
    padding: 14px 30px;
    font-size: 14px;
    min-width: 260px;
  }

  .box-sm {
    padding: 11px 22px;
    font-size: 12px;
    min-width: 180px;
  }

  .box-xs {
    padding: 9px 16px;
    font-size: 11px;
    min-width: 140px;
  }

  /* Colors */
  .green {
    background: #5f9f83;
  }

  .blue {
    background: #6e8f94;
  }

  .orange {
    background: #f08a4b;
  }

  .red {
    background: #ea6a62;
  }

  .dot {
    width: 8px;
    height: 8px;
    background: #444;
    border-radius: 50%;
    margin: 10px auto;
  }

  .sector {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .connector {
    height: 2px;
    background: repeating-linear-gradient(
      to right,
      #888,
      #888 5px,
      transparent 5px,
      transparent 10px
    );
    margin: 15px auto;
    width: 70%;
  }

  .connector.small {
    width: 40%;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .org {
      padding: 20px 10px;
    }

    .level {
      gap: 15px;
      margin: 10px 0;
    }

    .sectors {
      gap: 12px;
    }

    .bottom {
      gap: 20px;
    }

    .box-lg {
      padding: 12px 24px;
      font-size: 13px;
      min-width: 240px;
    }

    .box-md {
      padding: 11px 22px;
      font-size: 12px;
      min-width: 210px;
    }

    .box-sm {
      padding: 9px 16px;
      font-size: 11px;
      min-width: 140px;
    }

    .box-xs {
      padding: 7px 12px;
      font-size: 10px;
      min-width: 110px;
    }
  }

  @media (max-width: 480px) {
    .org {
      padding: 15px 8px;
    }

    .level {
      gap: 10px;
      margin: 8px 0;
      flex-wrap: wrap;
    }

    .sectors {
      gap: 8px;
      max-width: 100%;
    }

    .bottom {
      gap: 10px;
      max-width: 100%;
    }

    .box-lg {
      padding: 10px 16px;
      font-size: 11px;
      min-width: 160px;
      flex: 0 1 calc(100% - 16px);
    }

    .box-md {
      padding: 9px 14px;
      font-size: 10px;
      min-width: 140px;
      flex: 0 1 calc(100% - 16px);
    }

    .box-sm {
      padding: 8px 12px;
      font-size: 9px;
      min-width: auto;
      flex: 0 1 calc(50% - 8px);
    }

    .box-xs {
      padding: 6px 10px;
      font-size: 8px;
      min-width: auto;
      flex: 0 1 calc(50% - 8px);
    }

    .dot {
      width: 6px;
      height: 6px;
      margin: 6px auto;
    }

    .connector {
      margin: 10px auto;
      width: 60%;
    }

    .connector.small {
      width: 35%;
    }

    .sector {
      flex: 0 1 calc(50% - 8px);
    }
  }
</style>
