export default function decorate(block) {
  const rows = [...block.children];
  block.textContent = '';

  if (rows.length === 1 && rows[0].textContent && rows[0].textContent.trim() !== '') {
    const iframe = document.createElement('iframe');
    //  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    iframe.src = rows[0].textContent;
    iframe.width = 600;
    iframe.height = 450;
    iframe.style = "border:0";
    iframe.loading = "lazy";
    block.append(iframe);
  } else if (rows.length === 2 && rows[0].textContent && rows[0].textContent.trim() !== '') {
    // cols[0] is the iframe, cols[1] will be displayed on the right side of it
    const divContainer = document.createElement('div');
    divContainer.classList.add('iframe-with-image');

    const iframe = document.createElement('iframe');
    //  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    iframe.src = rows[0].textContent;
    iframe.width = 600;
    iframe.height = 450;
    iframe.style = "border:0";
    iframe.loading = "lazy";
    divContainer.append(iframe);

    rows[1].classList.add("right-col");
    divContainer.append(rows[1]);

    block.append(divContainer);
  }
}
