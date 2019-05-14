window.onload = () => {
    window.client = new Client(null, null, null, null, allBooks);

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

    function updateBooksComponent(books) {
        var bookComponent = document.querySelector('.main-content-block__display_books');
        bookComponent.innerHTML = '';
        books.forEach(book => {
            bookComponent.appendChild(createBookElement(book));
        });
    }


    function updateContent() {
        updateBooksComponent(client.getCurrentBooks());
    }

    updateContent();


    var categoriesBlock = document.querySelector('.categories-block');
    var searchInput = document.querySelector('.filter-books-block__filter > input');
    var sortMenu = document.querySelector('.filter-books-block__list');

    categoriesBlock.addEventListener('click', function (e) {
        client.category_books = e.target.getAttribute('data-category');
        updateContent();
        this.querySelector('[active]').removeAttribute('active');
        e.target.setAttribute('active', null);
    });

    searchInput.addEventListener('keyup', function (e) {
        client.search_string = e.target.value;
        updateContent();
    });

    sortMenu.addEventListener('click', function (e) {
        client.sort_books = e.target.getAttribute('data-sort-books');
        updateContent();
        this.querySelector('[active]').removeAttribute('active');
        e.target.setAttribute('active', null);
    });

    window.onRatingChanged = (bookId, newRating) => {
        console.info(bookId + ' new Rating ' + newRating);
    };
};