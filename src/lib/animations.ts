import gsap from "gsap/dist/gsap";

export function getHeroTimeline(
  chars1: Array<HTMLElement>,
  title1: HTMLElement | null,
  // title2: HTMLElement | null,
  // chars2: Array<HTMLElement>,
  // menuTitleChars: Array<HTMLElement>
): gsap.core.Timeline {
  console.log({
    chars1,
    title1,
    // title2,
    // chars2,
  });

  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    chars1,
    {
      "--text-weight": 300,
    },
    {
      "--text-weight": 700,
      yoyo: true,
      repeat: -1,
      duration: 2,
      stagger: 0.1,
    },
  );

  return tl;
}
