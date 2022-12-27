import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const cards = cardsGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", cards);
function cardsGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery a", {
  captions: "true",
  captionSelector: "img",
  captionPosition: "bottom",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
