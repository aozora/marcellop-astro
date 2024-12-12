<script lang="ts">
  /**
   * Gallery scroll by https://tympanus.net/codrops/?p=73182
   */

  import { onMount } from 'svelte';
  import gsap from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const gallery =[
    'img_0120.png',
    'img_0226.png',
    'img_1259.png',
    'img_1264.png',
    'img_1421.png',
    'img_1669.png',
    'img_1738.png',
    'img_2022.png',
    'img_2063.png',
    'img_2102.png',
    'img_2529.png',
    'img_2634.png',
    'img_2652.png',
    'img_2739.png',
    'img_2909.png',
    'img_2921.png',
    'img_3044.png',
    'img_3069.jpeg',
    'img_3069.png',
    'img_3215.png',
    'img_3256.png',
    'img_3303.png',
    'img_3353.png',
    'img_3371.png',
    'img_3454.png',
    'img_3464.png',
    'img_3772.png',
    'img_20110728_192423.png',
    'img_20110903_083609.png',
    'img_20130518_080451.png',
    'img_20140817_104657.png',
    'img_20150419_113030.png',
    'img_20151004_080855.png',
    'img_20151106_072844.png',
    'img_20160329_162935.png',
  ]

  // type PageProps = {
  //   tati: {
  //     id: string
  //     seo: Array<SeoMetaTagType>;
  //     title: string
  //     intro: string
  //     gallery: Array<ResponsiveImage>
  //   }
  // }


  /**
   * PROPS
   */
  // export let data: PageProps;
  //
  // let { tati }: PageProps = data;
  // const { site } = $commonData;
  // const headTags = tati && site ? tati.seo.concat(site.favicon) : [];

  function createGroups(arr: string[], numGroups: number) {
    const perGroup = Math.ceil(arr.length / numGroups);

    return new Array(numGroups)
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  let groups: string[][];

  $: {
    groups = createGroups(gallery, 5);
  }

  // Helper function that lets you dynamically figure out a grid's rows/columns as well as further refine those with "odd" or "even" ones
  // https://greensock.com/forums/topic/34808-how-can-i-animate-the-odd-and-even-columns-rows-of-a-grid-with-gsapto/?do=findComment&comment=174346
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getGrid = (selector:Element) => {
    let elements = gsap.utils.toArray(selector),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bounds,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      getSubset = (axis, dimension, alternating, merge) => {
        let a = [],
          subsets = {},
          onlyEven = alternating === 'even',
          p;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        bounds.forEach((b, i) => {
          let position = Math.round(b[axis] + b[dimension] / 2),
            subset = subsets[position];
          subset || (subsets[position] = subset = []);
          subset.push(elements[i]);
        });
        for (p in subsets) {
          a.push(subsets[p]);
        }
        if (onlyEven || alternating === 'odd') {
          a = a.filter((el, i) => !(i % 2) === onlyEven);
        }
        if (merge) {
          let a2 = [];
          a.forEach(subset => a2.push(...subset));
          return a2;
        }
        return a;
      };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    elements.refresh = () => bounds = elements.map(el => el.getBoundingClientRect());
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    elements.columns = (alternating, merge) => getSubset('left', 'width', alternating, merge);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    elements.rows = (alternating, merge) => getSubset('top', 'height', alternating, merge);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    elements.refresh();

    return elements;
  };

  onMount(() => {
    // Element with class .columns
    const grid = document.querySelector('.columns');
    // All the columns class .column
    const columns = [...grid.querySelectorAll('.column')];
    // Map each column to its array of items and keep a reference of the image, its wrapper and the column
    const items = columns.map((column, pos) => {
      return [...column.querySelectorAll('.column__item')].map(item => ({
        element: item,
        column: pos,
        wrapper: item.querySelector('.column__item-imgwrap'),
        image: item.querySelector('.column__item-img')
      }));
    });
    // All itemms
    const mergedItems = items.flat();


    const scroll = () => {
      const gridObj = getGrid(mergedItems.map(item => item.element));

      const rowMapping = {
        even: {
          skewX: 2,
          xPercent: -50,
          transformOrigin: '0% 50%'
        },
        odd: {
          skewX: -2,
          xPercent: 50,
          transformOrigin: '100% 50%'
        }
      };

      ['even', 'odd'].forEach(type => {
        gridObj.rows(type).flat().forEach(row => {
          gsap
            .timeline({
              defaults: { ease: 'none' },
              scrollTrigger: {
                trigger: row,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            })
            .to(row.querySelector('.column__item-imgwrap'), {
              xPercent: rowMapping[type].xPercent,
              skewX: rowMapping[type].skewX
            }, 0)
            .to(row.querySelector('.column__item-img'), {
              ease: 'power1.in',
              startAt: { transformOrigin: rowMapping[type].transformOrigin },
              scaleX: 1.4
            }, 0);

        });
      });
    };

    // initSmoothScrolling();
    scroll();
  });

</script>

<section class="tati">
  <h1>Tati</h1>
  <p>In loving memory of my dear Tati 15/04/2011 - 03/03/2023</p>

  <div class="columns">
    {#each groups as column}
      <div class="column">
        {#each column as item}
          <figure class="column__item">
            <div class="column__item-imgwrap">
              <div class="column__item-img" style={`background-image:url(/img/tati/${item})`}></div>
            </div>
          </figure>
        {/each}
      </div>
    {/each}
  </div>

</section>

<style lang="scss">
  @use "../styles/shared" as *;

  .tati {
    overflow: hidden;
    @include container;

    h1 {
      --text-weight: 600;
      margin-bottom: 3rem;
      font-family: var(--body-font-family);
      font-size: 24vw;
      line-height: 1.2;
      text-transform: uppercase;
      color: var(--color-pantone);

      @supports (font-variation-settings: normal) {
        font-family: var(--variable-font-family);
        font-variation-settings: 'wght' var(--text-weight);
      }
    }

    p {
      margin-bottom: 3rem;
      font-size: 3rem;
    }
  }

  .columns {
    --grid-item-translate: 0px;
    --grid-item-ratio: 0.75;
    --grid-item-radius: 0px;
    --grid-gap: 2vw;
    --grid-columns: 2;
    --grid-width: 140%;
    --grid-max-width: none;

    width: var(--grid-width);
    max-width: var(--grid-max-width);
    position: relative;
    padding: 10vh 0;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(var(--grid-columns), 1fr);
    gap: var(--grid-gap);

    @media (min-width: 64em){
      --grid-columns: 5;
    }
  }

  .column {
    width: 100%;
    position: relative;
    display: grid;
    gap: var(--grid-gap);
    grid-template-columns: 100%;
    will-change: transform;
  }

  .column__item {
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .column__item-imgwrap {
    width: 100%;
    aspect-ratio: var(--grid-item-ratio);
    height: auto;
    position: relative;
    overflow: hidden;
    border-radius: var(--grid-item-radius);
  }

  .column__item-img {
    position: absolute;
    top: calc(-1 * var(--grid-item-translate));
    left: calc(-1 * var(--grid-item-translate));
    height: calc(100% + var(--grid-item-translate) * 2);
    width: calc(100% + var(--grid-item-translate) * 2);
    background-size: cover;
    background-position: 50% 20%;
    backface-visibility: hidden;
  }
</style>
