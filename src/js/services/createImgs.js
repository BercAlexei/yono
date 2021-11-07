class CreateImgs {
    constructor(src) {
        this.src = src;
    }

    render() {
        const setimg = document.querySelector('.promo__gallery');
        const slider = document.querySelector('.slider');

        let imgLabel = document.createElement('div');
        let imgModal = document.createElement('div');

        imgLabel.classList.add('promo__gallery-photo');
        imgModal.classList.add('modal__img-wrapper');

        imgModal.innerHTML = `
        <img src="img/clothes/${this.src}.png" alt='Hero'>
        `;

        imgLabel.innerHTML = `
            <input name='img' id=${this.src} type="radio">
            <label for=${this.src} data-src=${this.src}>
                <img src="img/clothes/${this.src}.png" alt=${this.src} data-src=${this.src}>
            </label>
        `;
        setimg.append(imgLabel);
        slider.append(imgModal);
    }
}

export { CreateImgs };