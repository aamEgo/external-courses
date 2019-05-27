window.onload = () => {
    const HISTORY_MAX_ELEMENTS = 3;

    var fromStorage = storage.loadFromStorage();
    if (fromStorage.allBooks) {
        initApplication(fromStorage.allBooks,fromStorage.history);
    } else {
        myFetchGet('https://rsu-library-api.herokuapp.com/books')
            .then((json) => {
                json = JSON.parse(json);
                initApplication(json, fromStorage.history);
            })
            .catch((msg) => {
                console.error('Error: ', msg)
            });
    }

    function initApplication(books, history) {
        var libraryModel = new LibraryModel(books);
        var libraryView = new LibraryView(libraryModel, {
            showBookConstructorButton: document.querySelector('#show-book-constructor-button'),
            addNewBookForm: document.querySelector('.create-book__form'),

            switchLibraryViewBlocks: {
                browseBooksBlock: document.querySelector('.main-content-block__show-books'),
                createNewBookBlock: document.querySelector('.main-content-block__create-book'),
            },

            stateTitle: document.querySelector('.header-category-line > h1'),
            booksBlock: document.querySelector('.main-content-block__display_books'),
            categoriesBlock: document.querySelector('.categories-block'),
            sortMenu: document.querySelector('.filter-books-block__list'),
            searchInput: document.querySelector('.filter-books-block__filter > input'),
        });
        var historyModel = new HistoryModel(history, HISTORY_MAX_ELEMENTS);
        var historyView = new HistoryView(historyModel, document.querySelector('#historyComponent'));
        var libraryController = new LibraryController(libraryView, libraryModel, historyView, historyModel);
        libraryView.show();
        historyView.show();
    }
}