class LibraryView extends EventEmitter {
    constructor(libraryModel, elements) {
        super();
        var self = this;
        elements.showBookConstructorButton.addEventListener('click', () => libraryModel.setState('create_new_book'));
        elements.addNewBookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            var newBookObject = formToJSON(e.target);
            this.emit('create_new_book_command', newBookObject);
        });
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
        elements.searchInput.addEventListener('keydown', (e) => {
            myDebounce(() => {
                var newSearchString = e.target.value;
                if (newSearchString.length >= 3 || newSearchString.length == 0)
                    this.emit('search_string_changed', newSearchString);
            }, 350);
        });


        libraryModel.on('state_changed', newState => {
            for (var key in this.elements.switchLibraryViewBlocks) {
                this.elements.switchLibraryViewBlocks[key].setAttribute('hidden', '');
            }
            switch (newState) {
                case 'browse_books':
                    this.elements.stateTitle.innerText = "Browse Available Books";
                    removeAttribute(this.elements.switchLibraryViewBlocks.browseBooksBlock, 'hidden');
                    break;
                case 'create_new_book':
                    this.elements.stateTitle.innerText = "Create New Book";
                    removeAttribute(this.elements.switchLibraryViewBlocks.createNewBookBlock, 'hidden');
                    break;
                case 'error':
                    this.elements.stateTitle.innerText = "There was a loading error";
                    break;
            }
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
            //this.getBooksContainer().innerHTML = '';
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
        ratingElement.appendChild(starComponent.createStarsComponent(book.rating, (newRating) => {
            this.emit('book_rating_changed', book.id, newRating);
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