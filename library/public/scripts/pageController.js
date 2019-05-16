window.onload = () => {
    window.client = new Client(null, null, null, null, allBooks);

    //Html handling elements
    var categoriesBlock = document.querySelector('.categories-block');
    var searchInput = document.querySelector('.filter-books-block__filter > input');
    var sortMenu = document.querySelector('.filter-books-block__list');

    var historyBlock = document.querySelector('#historyComponent');
    var booksBlock = document.querySelector('.main-content-block__display_books');
    var categoryTitle = document.querySelector('.header-category-line > h1');

    var history = new HistoryComponent(historyBlock);
    var mainContent = new MainContentComponent(null, categoryTitle, booksBlock);

    /*
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


            /!* RATING *!/
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

    */

    function updateContent() {
        mainContent.updateBooksComponent(client.getCurrentBooks());
    }

    updateContent();


    categoriesBlock.addEventListener('click', function (e) {
        client.category_books = e.target.getAttribute('data-category');
        updateContent();
        history.addHistoryEvent('changed_category', { category: e.target.innerText});
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            client.search_string = e.target.value;
            updateContent();
            history.addHistoryEvent('changed_searchString', {search_string: client.search_string});
        }
    });


    sortMenu.addEventListener('click', function (e) {
        var sortValue = e.target.getAttribute('data-sort-books');
        if (!sortValue)
            return;
        client.sort_books = sortValue;
        updateContent();
        this.querySelector('[active]').removeAttribute('active');
        e.target.setAttribute('active', '');
    });

    window.onRatingChanged = (bookId, newRating) => {
        //TODO save to history
        var currentBook = client.getBookById(bookId);
        var eventData = {title: currentBook.title, author: currentBook.author, newRating: newRating};
        history.addHistoryEvent('changed_rating', eventData);
    };


};