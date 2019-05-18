window.onload = () => {
    const HISTORY_MAX_ELEMENTS = 3;
    var libraryModel = new LibraryModel(allBooks);
    var libraryView = new LibraryView(libraryModel, {
        booksBlock: document.querySelector('.main-content-block__display_books'),

        categoriesBlock: document.querySelector('.categories-block'),
        sortMenu: document.querySelector('.filter-books-block__list'),
        searchInput: document.querySelector('.filter-books-block__filter > input'),
    });
    var historyModel = new HistoryModel(null, HISTORY_MAX_ELEMENTS);
    var historyView = new HistoryView(historyModel, document.querySelector('#historyComponent'));
    var libraryController = new LibraryController(libraryView, libraryModel,historyView,historyModel);
    libraryView.show();
    historyView.show();
}