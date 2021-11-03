class CreateSize {
    constructor( size) {
        this.size = size;
    }

    render() {
        const setSize = document.querySelector('.promo__size');

        let sizeLabel = document.createElement('div');
        sizeLabel.style.display = 'inline-block';

        sizeLabel.innerHTML = `
            <input name='size' id=${this.size} type="radio">
            <label data-size=${this.size} for=${this.size}>${this.size}</label>
        `
        setSize.append(sizeLabel);
    }
}

export { CreateSize };