export const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  console.log("scroll")
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}