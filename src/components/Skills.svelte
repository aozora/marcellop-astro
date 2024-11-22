<section clasS="skills">
  <h2>Skills</h2>

  <ul>
    <li>
      <h3>Front-ed framework</h3>

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

    <li>
      <h3>Content Management System</h3>

      <ul>
        <li>
          <strong>DatoCms</strong>
        </li>
        <li><strong>Sanity</strong></li>
        <li><strong>Strapi</strong></li>
      </ul>
    </li>

    <li>
      <h3>Languages</h3>

      <ul>
        <li><strong>JavaScript</strong></li>
        <li><strong>TypeScript</strong></li>
        <li><strong>Node.js</strong></li>
      </ul>
    </li>

    <li>
      <h3>Other</h3>

      <ul>
        <li><strong>Prisma.js</strong></li>
        <li><strong>GSAP</strong></li>
      </ul>
    </li>
  </ul>

</section>


<style lang="scss">
  .skills {
    h3 {
      font-size: 6vw;
      color: var(--theme-foreground);
    }

    h4 {
      color: var(--color-highlight);
    }

    ul, li {
      list-style: none;
      margin: 0;
      padding: 0;
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
