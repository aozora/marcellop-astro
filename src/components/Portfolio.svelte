<script lang="ts">
  import type {CollectionEntry} from "astro:content";

  interface Props {
    portfolio: Array<CollectionEntry<'portfolio'>>;
  }

  let {portfolio}: Props = $props();

  console.log({portfolio})
  // console.log(portfolio.data)
</script>

<section class="portfolio">
  <h2>Portfolio</h2>

  <div class="portfolio-items">
    {#each portfolio as entry}
      <button type="button" class="portfolio-item">
        {entry.data.title}
      </button>
    {/each}
  </div>
</section>


<style lang="scss">
  .portfolio{

  }

  .portfolio-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .portfolio-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 1rem;
    border: 0;
    background-color: var(--color-dark);
  }

</style>
