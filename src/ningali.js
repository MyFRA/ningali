const ningali = (function () {
    const ningali = function (config, callback) {
        const inputFileElement = document.querySelector(config.inputFileElement);
        const targetPreviewElement = document.querySelector(config.targetPreviewElement);

        inputFileElement.addEventListener('change', function () {
            const file = inputFileElement.files[0];

            if (file.type) {
                targetPreviewElement.setAttribute('src', URL.createObjectURL(file));
                callback(file);
            }
        });
    };
    return ningali;
})();