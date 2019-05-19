class LibraryController {
    constructor(libraryView, libraryModel, historyView, historyModel) {
        libraryView.on('sort_changed', (val) => {
            libraryModel.sort = val;
            libraryModel.acceptSort();
        });

        libraryView.on('category_changed', (val, categoryName) => {
            libraryModel.category = val;
            libraryModel.acceptFilters();
            libraryModel.acceptSort();

            historyModel.addHistoryRow({event: 'changed_category', category: categoryName});
        });

        libraryView.on('search_string_changed', (val) => {
            libraryModel.search_string = val;
            libraryModel.acceptFilters();
            libraryModel.acceptSort();

            historyModel.addHistoryRow({event: 'changed_search_string', search_string: val});
        });

        libraryView.on('book_rating_changed', (book_id, newRating) => {
            var currentBook = libraryModel.getBookById(book_id);
            currentBook.rating = newRating;
            var eventData = {
                event: 'changed_rating',
                title: currentBook.title,
                author: currentBook.author,
                newRating: newRating
            };
            //Сортируем коллекцию в соответствии с новым рейтингом
            libraryModel.acceptSort();
            historyModel.addHistoryRow(eventData);
        });
        this._libraryView = libraryView;
        this._libraryModel = libraryModel;
        this._historyView = historyView;
        this._historyModel = historyModel;
    }

    get libraryView() {
        return this._libraryView;
    }

    get libraryModel() {
        return this._libraryModel;
    }

    get historyView() {
        return this._historyView;
    }

    get historyModel() {
        return this._historyModel;
    }
}