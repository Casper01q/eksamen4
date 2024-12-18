document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.clickable');

    images.forEach(image => {
        image.addEventListener('click', function () {
            // Opret popup-elementet
            const popup = document.createElement('div');
            popup.classList.add('popup');

            // Tilføj billedet til popup
            const popupImage = document.createElement('img');
            popupImage.src = image.src;
            popup.appendChild(popupImage);

            // Tilføj popup til dokumentet
            document.body.appendChild(popup);

            // Luk popup, når man klikker på den
            popup.addEventListener('click', function () {
                document.body.removeChild(popup);
            });
        });
    });
});