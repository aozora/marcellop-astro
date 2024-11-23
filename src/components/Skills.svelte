<section class="skills">
  <h2>Skills</h2>

  <ul>
    <li style="--index: 0;">
      <h3>Accessibility</h3>

      <p>Technical accessibility in design and software development refers to the practice of creating digital products,
        services, and experiences that can be used by all individuals, including those with disabilities.</p>
    </li>

    <li style="--index: 1;">
      <h3>Performance</h3>

      <p>A fast, responsive interface significantly enhances the user experience. Slow-loading pages or laggy
        interactions can frustrate users, leading to higher bounce rates and lower engagement. Performance is often the
        first impression users get of your application.</p>
    </li>

    <li style="--index: 2;">
      <h3>Design Systems</h3>

      <p>
        A design system is crucial in design and software engineering as it provides a centralized framework of reusable
        components, guidelines, and standards. It ensures consistency across products, enhances collaboration between
        designers and developers, and accelerates development by reducing redundant work.</p>
    </li>

    <li style="--index: 3;">
      <h3>Agile development</h3>

      <p>Agile development is a flexible, iterative approach to software development that emphasizes collaboration,
        customer feedback, and rapid delivery of small, incremental improvements. It prioritizes adaptability, enabling
        teams to respond quickly to changing requirements.</p>
    </li>
  </ul>
</section>


<style lang="scss">
  @use "../styles/shared" as *;

  .skills {
    @include container;

    h3 {
      margin-bottom: 3rem;
      font-size: 6vw;
      color: var(--theme-foreground);
    }

    h3 + p {
      font-size: 4vw;
      line-height: 1.3;
      //text-transform: uppercase;
      --text-weight: 700;
      color: var(--color-highlight);
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

  }
</style>
