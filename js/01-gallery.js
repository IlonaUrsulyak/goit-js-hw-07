import { galleryItems } from './gallery-items.js';
// Change code below this line

// Реалізація делегування на div.gallery і отримання url великого зображення.{/* <div class="gallery__item">
 

const galleryEl = document.querySelector('.gallery')

function onCreatGallery(galleryItems){
  return galleryItems.map(({preview, original, description}) => 
  {return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`}).join('');
}

const imageItem = onCreatGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imageItem);

galleryEl.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }
  

  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
    onShow: (instance) => console.log('onShow', instance),
    onClose: (instance) => console.log('onClose', instance),
  });
  

  instance.show();
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      instance.close()
    }
  });
};

console.log(galleryItems);
