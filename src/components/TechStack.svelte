<section class="tech-stack">
  <h2>Tech Stack</h2>

  <ul>
    <li style="--index: 0;">
      <h3>Front-end framework</h3>

      <ul>
        <li>
          <strong>React</strong>
          <p>Next.js, Remix</p>
        </li>
        <li>
          <strong>Svelte</strong>
          <p>SvelteKit</p>
        </li>
        <li>
          <strong>Astro</strong>
        </li>
        <li>
          <strong>Vue.js</strong>
        </li>
      </ul>
    </li>

    <li style="--index: 1;">
      <h3>Content Management System</h3>

      <ul>
        <li>
          <strong>DatoCms</strong>
        </li>
        <li><strong>Sanity</strong></li>
        <li><strong>Strapi</strong></li>
      </ul>
    </li>

    <li style="--index: 2;">
      <h3>Languages</h3>

      <ul>
        <li><strong>JavaScript</strong></li>
        <li><strong>TypeScript</strong></li>
        <li><strong>Node.js</strong></li>
      </ul>
    </li>

    <li style="--index: 3;">
      <h3>Other</h3>

      <ul>
        <li><strong>Prisma.js</strong></li>
        <li><strong>GSAP</strong></li>
      </ul>
    </li>
  </ul>

</section>


<style lang="scss">
  @use "../styles/shared" as *;

  .tech-stack {
    @include container;

    h3 {
      margin-bottom: 3rem;
      font-size: 10vw;
      color: var(--theme-foreground);
    }

    ul, li {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    > ul > li {
      position: sticky;
      top: calc((var(--index) - 1) * 2vh + var(--menu-height));
      width: 100%;
      height: 90vh;
      padding: 3rem 0;
      overflow: hidden;
      background-color: var(--theme-background);
      z-index: var(--index);

      > ul {
        @include container-layout-grid;

        li {
          grid-column: 6/12;
        }
      }
    }


    li {
      strong {
        font-size: 6vw;
        text-transform: uppercase;
        --text-weight: 700;
        color: var(--color-highlight);

        + p {
          font-size: 4vw;
          text-transform: uppercase;
          --text-weight: 700;
          color: var(--theme-foreground);
        }
      }
    }

  }
</style>
