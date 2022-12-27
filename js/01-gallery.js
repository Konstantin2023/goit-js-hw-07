import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const cards = cardsGalleryItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", cards);

function cardsGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
gallery.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const urlLargeImage = evt.target.getAttribute("data-source");
  console.log(urlLargeImage);
  const instance = basicLightbox.create(
    `<img src="${urlLargeImage}" width="800" height="600">`
  );
  instance.show();
});

// let markup = "";
// for (let i = 0; i <= 9; i += 1) {
//   markup += `<div class="item"></div>`;
// }
// gallery.insertAdjacentHTML("beforeend", markup);
// gallery.addEventListener("click", onClick);

// function onClick(evt) {
//   console.log(evt.target);
// }
