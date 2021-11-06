'use strict';

import changeSize from './modules/showImg.js';
import modal from './modules/modal.js';

document.addEventListener('DOMContentLoaded', async () => {
    await changeSize();
    modal();
});
