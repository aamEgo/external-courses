var starComponent = function () {
    function updateRatingElement(ratingElement, newRating) {
        var prevActiveStar = ratingElement.querySelector('[activ]');
        if (prevActiveStar) {
            prevActiveStar.removeAttribute('activ');
        }
        ratingElement.setAttribute('data-rating', newRating);
        ratingElement.querySelector('[data-index="' + newRating + '"]').setAttribute('activ', null);
    }

    function createRatingElement(rating) {
        var starsContainer = document.createElement('div');
        starsContainer.classList.add('stars-container');
        for (var i = 10; i > 0; --i) {
            var star = document.createElement('i');
            if (rating * 2 == i) {
                star.setAttribute('activ', null);
            }
            star.setAttribute('data-index', i);
            star.classList.add('far', 'fa-star');
            starsContainer.appendChild(star);
        }
        return starsContainer;
    }

    return {
        createStarsComponent: function (startRating, onRatingChanged) {
            var ratingContainer = document.createElement('div');
            ratingContainer.classList.add('rating');
            var ratingComponent = createRatingElement(startRating);

            ratingComponent.addEventListener('click', function (e) {
                var newRating = e.target.getAttribute('data-index');
                updateRatingElement(ratingComponent, newRating);
                onRatingChanged(newRating / 2);
            });

            ratingContainer.appendChild(ratingComponent);
            return ratingContainer;
        }
    }
}();

