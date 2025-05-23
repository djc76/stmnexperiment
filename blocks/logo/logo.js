export default async function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.textContent = '';

  let logoParent = block;
  if (cols.length > 0 && cols[0].textContent && cols[0].textContent.trim() !== '') {
    logoParent = document.createElement('a');
    logoParent.href = cols[0].textContent;
    logoParent.setAttribute('aria-label', 'Hyperlink to Home of Pistolensektion Laufen');
    block.append(logoParent);
  }

  const logoImage = document.createElement('img');
  logoImage.src = '../../images/logo-black-transparent.png'; // Replace with actual logo path
  logoImage.alt = 'Pistolensektion Laufen Logo';
  logoParent.append(logoImage);
}
