<div class="main-content-block__display_books__item">
    <div class="book_image"><img src="img/book%20example.png"></div>
    <div class="book_title">Jewels of Nizam</div>
<div class="book_author">by Geeta Devi</div>
<div class="book_rating">
    <div class="rating">
    <div class="stars-container">
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>

    <i class="far fa-star"></i>
    <i class="far fa-star"></i>

    <i class="far fa-star"></i>
    <i class="far fa-star"></i>

    <i class="far fa-star"></i>
    <i class="far fa-star"></i>

    <i activ class="far fa-star"></i>
    <i class="far fa-star"></i>
    </div>
    </div>
    </div>
    </div>


function createBookElement(book) {
    var result = document.createElement('div');
    result.classList.add('main-content-block__display_books__item');
    result.setAttribute('data-bookId',book._id);
}