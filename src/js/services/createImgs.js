class CreateImgs {
    constructor(src) {
        this.src = src;
    }

    render() {
        const setimg = document.querySelector('.promo__gallery');

        let imgLabel = document.createElement('div');

        imgLabel.classList.add('promo__gallery-photo');

        imgLabel.innerHTML = `
            <input name='img' id=${this.src} type="radio">
            <label for=${this.src} data-src=${this.src}>
                <img src="img/clothes/${this.src}.png" alt=${this.src} data-src=${this.src}>
            </label>
        `;
        setimg.append(imgLabel);
    }
}

export { CreateImgs };