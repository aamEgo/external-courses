class LibraryModel extends EventEmitter {
    constructor(booksLib) {
        super();
        this._search_string = null;
        this._category = null;
        this._sort = 'all_books';

        this._booksLib = booksLib.map(element => {
            if (element.author.firstName)
                element.author = element.author.firstName + ' ' + element.author.lastName;
            return element;
        });


        this.currentCollection = this._booksLib;
    }

    get booksLib() {
        return this._booksLib;
    }

    get search_string() {
        return this._search_string;
    }

    set search_string(value) {
        this._search_string = value;
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get sort() {
        return this._sort;
    }

    set sort(value) {
        this._sort = value;
    }

    acceptFilters() {
        var newCollection = this.booksLib.filter(book => {
            if (this.search_string && !(book.title.toLowerCase().includes(this.search_string.toLowerCase()) || book.author.toLowerCase().includes(this.search_string.toLowerCase())))
                return false;
            if (this.category && !book.categories.includes(this.category))
                return false;
            return true;
        });
        //Вычисляем добавленные и удаленные элементы и оповещаем слушателей
        this.notifyDifference(newCollection, this.currentCollection, 'book_render');
        this.notifyDifference(this.currentCollection, newCollection, 'book_remove');
        this.currentCollection = newCollection;
    }

    acceptSort() {
        var sortedCollection = null;
        switch (this.sort) {
            case 'recent_books':
                sortedCollection = this.currentCollection.sort((b, a) => {
                    return a.createdAt - b.createdAt;
                });
                break;
            case 'popular_books':
                sortedCollection = this.currentCollection.sort((b, a) => {
                    return a.rating - b.rating;
                });
                break;
            case 'free_books':
                sortedCollection = this.currentCollection.sort((a, b) => {
                    return a.cost - b.cost;
                });
                break;
            case 'all_books':
                sortedCollection = this.currentCollection.sort((a, b) => {
                    return a.id - b.id;
                });
                break;
            default:
                sortedCollection = this.currentCollection;
        }
        this.emit('books_sorted', sortedCollection);
        this.currentCollection = sortedCollection;
    }

    //Оповещает слушателей об изменении исходного массива
    notifyDifference(sourceCollection, compareWith, eventNotify) {
        sourceCollection.forEach(element => {
            if (!compareWith.includes(element))
                this.emit(eventNotify, element);
        })
    }
}