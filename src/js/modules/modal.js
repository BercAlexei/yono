export default function modal() {
    
    const mainImg = document.querySelector('.promo__img img'),
          modal = document.querySelector('.modal');

    mainImg.addEventListener('click', ()=> {
        modal.style.display = 'block';
    });

    document.addEventListener('click', event => {
        if(event.target === modal || event.target.getAttribute('data-close') === 'close') {
            modal.style.display = 'none';
        }
      });
}
