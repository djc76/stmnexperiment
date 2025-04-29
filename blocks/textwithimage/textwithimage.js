export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  if (cols.length === 2) {
    cols[0].classList.add('img');
    cols[1].classList.add('text');
  }
}
