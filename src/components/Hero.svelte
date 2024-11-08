<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import {ScrollTrigger} from "gsap/ScrollTrigger";
  import { getHeroTimeline } from '@/lib/animations';

  let mainContainer: HTMLDivElement;

  const title = 'MARCELLO PALMITESSA FREELANCE FULL STACK ARCHITECT DEVELOPER MENTOR TEAM LEADER';


  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      const chars1 = self.selector('.hero2-title1 .char span');
      const title1 = self.selector('.hero2-title1');
      const title2 = self.selector('.hero2-title2');
      const chars2 = self.selector('.hero2-title2 .char span');
      const menuTitleChars = Array.from(document.querySelectorAll<HTMLElement>('.menu__title .header-title-char span'));

      const tl = getHeroTimeline(chars1, title1, title2, chars2, menuTitleChars);
      tl.play();
    }, mainContainer); // <- Scope!

    return () => ctx.revert(); // <- Cleanup!
  });

</script>

<div class="main-content" bind:this={mainContainer}>
  <div class="hero2">
    <h2 class="hero2-title2">
      <span class="visuallyhidden">{title}</span>

      <span class="word" style:--char-count={title.length}>
      {#each Array.from(title) as char, charIndex}
        <span class="char">
          <span style:--char-index={charIndex}>{char}</span>
        </span>
      {/each}
      </span>

<!--      <span class="word" style:&#45;&#45;char-count={'ENGINEER'.length}>-->
<!--      {#each Array.from('ENGINEER') as char, charIndex}-->
<!--        <span class="char">-->
<!--          <span style:&#45;&#45;char-index={charIndex}>{char}</span>-->
<!--        </span>-->
<!--      {/each}-->
<!--      </span>-->
    </h2>
  </div>

</div>
