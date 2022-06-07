import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery')

function onCreatGallery(galleryItems){
  return galleryItems.map(({preview, original, description}) => 
  {return `<div class="gallery__item">
  <a class="gallery__item" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      alt='${description}'
    />
  </a>
</div>`}).join('');
}

const imageItem = onCreatGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imageItem);

let lightboxGallery = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250ms',
 });
console.log(galleryItems);


