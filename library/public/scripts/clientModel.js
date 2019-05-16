class Client {

    constructor(user, sort_books, search_string, category_books, books) {
        this._user = user;
        this._search_string = search_string;
        this._category_books = category_books;
        this._allBooks = [];
        books.forEach(book => {
            var bookObject = Object.assign(new Book, book);
            this._allBooks.push(bookObject);
        });
        this._books = books;
        this._sort_books = sort_books;
    }

    getCurrentBooks() {
        return this.acceptBooksSort(this.acceptBooksFilters());
    }

    getBookById(id) {
        return this.allBooks.find(book => id == book.id);
    }

    acceptBooksSort(booksToSort) {
        switch (this.sort_books) {
            case 'recent_books':
                return booksToSort.sort((b, a) => {
                    return a.createdAt - b.createdAt;
                });
            case 'popular_books':
                return booksToSort.sort((b, a) => {
                    return a.rating - b.rating;
                });
            case 'free_books':
                return booksToSort.sort((a, b) => {
                    return a.cost - b.cost;
                });
            default:
                return booksToSort;
        }
    }

    acceptBooksFilters() {
        return this.allBooks.filter(book => {
            if (this.search_string && !(book.title.toLowerCase().includes(this.search_string.toLowerCase()) || book.author.toLowerCase().includes(this.search_string.toLowerCase())))
                return false;
            if (this.category_books && !book.categories.includes(this.category_books))
                return false;
            return true;
        });
    }

    get user() {
        return this._user;
    }


    get sort_books() {
        return this._sort_books;
    }

    set sort_books(value) {
        this._sort_books = value;
    }

    get search_string() {
        return this._search_string;
    }

    get category_books() {
        return this._category_books;
    }

    get allBooks() {
        return this._allBooks;
    }

    set user(value) {
        this._user = value;
    }


    set search_string(value) {
        this._search_string = value;
    }

    set category_books(value) {
        this._category_books = value;
    }

    set books(value) {
        this._books = value;
    }

    set allBooks(value) {
        this._allBooks = value;
    }
}
