function MainContentComponent(mainController, contentTitleHtmlElement, booksContentHtmlElement) {

    function createBookElement(book) {
        var result = document.createElement('div');
        result.classList.add('main-content-block__display_books__item');
        result.setAttribute('data-bookId', book.id);
        //
        var bookImage = document.createElement('div');
        bookImage.classList.add('book_image');
        var image = document.createElement('img');
        image.setAttribute('src', book.image_url);
        bookImage.appendChild(image);

        var bookTitle = document.createElement('div');
        bookTitle.classList.add('book_title');
        bookTitle.innerText = book.title;

        var bookAuthor = document.createElement('div');
        bookAuthor.classList.add('book_author');
        bookAuthor.innerText = 'by ' + book.author;


        /* RATING */
        var ratingElement = document.createElement('div');
        ratingElement.classList.add('book_rating');
        ratingElement.appendChild(createStarsComponent(book.rating, (newRating) => {
            window.onRatingChanged(book.id, newRating);
        }));
        result.appendChild(bookImage);
        result.appendChild(bookTitle);
        result.appendChild(bookAuthor);
        result.appendChild(ratingElement);
        return result;
    }

    return {


        updateBooksComponent : function (books) {
            var bookComponent = booksContentHtmlElement;
            bookComponent.innerHTML = '';
            books.forEach(book => {
                bookComponent.appendChild(createBookElement(book));
            });
        }
    }
}
