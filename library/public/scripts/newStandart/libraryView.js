class LibraryView extends EventEmitter {
    constructor(libraryModel, elements) {
        super();
        var self = this;
        elements.categoriesBlock.addEventListener('click', (e) => {
            var newCategory = e.target.getAttribute('data-category');
            this.emit('category_changed', newCategory, e.target.innerText);
        });
        elements.sortMenu.addEventListener('click', function (e) {
            var sortValue = e.target.getAttribute('data-sort-books');
            if (!sortValue)
                return;
            this.querySelector('[active]').removeAttribute('active');
            e.target.setAttribute('active', '');
            self.emit('sort_changed', sortValue);
        });
        //TODO debounce
        elements.searchInput.addEventListener('keyup', (e) => {
            var newSearchString = e.target.value;
            this.emit('search_string_changed', newSearchString);
        });


        libraryModel.on('book_render', newBook => {
            this.getBooksContainer().appendChild(this.createBookElement(newBook));
        });
        libraryModel.on('book_remove', bookToRemove => {
            this.getBooksContainer().removeChild(this.getBooksContainer().querySelector(`[data-book-id="${bookToRemove.id}"]`));
        });
        libraryModel.on('books_sorted', (sortedCollection) => {
            var htmlElementsSorted = sortedCollection.map(element => {
                return this.getBooksContainer().querySelector(`[data-book-id="${element.id}"]`);
            });
            this.getBooksContainer().innerHTML = '';
            htmlElementsSorted.forEach(element => {
                this.getBooksContainer().appendChild(element);
            });
        });
        this._libraryModel = libraryModel;
        this._elements = elements;
    }

    get libraryModel() {
        return this._libraryModel;
    }

    get elements() {
        return this._elements;
    }

    getBooksContainer() {
        return this.elements.booksBlock;
    }

    createBookElement(book) {
        var result = document.createElement('div');
        result.classList.add('main-content-block__display_books__item');
        result.setAttribute('data-book-id', book.id);
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
            //window.onRatingChanged(book.id, newRating);
        }));
        result.appendChild(bookImage);
        result.appendChild(bookTitle);
        result.appendChild(bookAuthor);
        result.appendChild(ratingElement);
        return result;
    }


    show() {
        this.libraryModel.booksLib.forEach(element => {
            this.getBooksContainer().appendChild(this.createBookElement(element));
        });
    }
}