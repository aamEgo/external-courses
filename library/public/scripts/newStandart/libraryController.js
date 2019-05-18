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