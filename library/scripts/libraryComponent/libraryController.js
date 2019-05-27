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

            libraryModel.setState('browse_books');
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
            currentBook.updatedAt = new Date().getTime();
            currentBook.rating = newRating;
            var eventData = {
                event: 'changed_rating',
                title: currentBook.title,
                author: currentBook.author,
                newRating: newRating
            };

            //Сохраняем обновленную информацию о коллекции книг
            storage.saveUpdatedBooks(libraryModel.booksLib);
            //Сортируем коллекцию в соответствии с новым рейтингом
            libraryModel.acceptSort();
            historyModel.addHistoryRow(eventData);
        });

        libraryView.on('create_new_book_command', newBookInfo =>{
            var nowTime = new Date().getTime();
            newBookInfo.rating = 1;
            newBookInfo.createdAt = nowTime;
            newBookInfo.updatedAt = nowTime;
            libraryModel.addNewBook(newBookInfo);
            libraryModel.setState('browse_books');
        });

        libraryModel.on('added_new_book',newBook=>{
            var eventDataForHistory = { event: 'added_book', author: newBook.author, title: newBook.title};
            historyModel.addHistoryRow(eventDataForHistory);

            //Сохраняем обновленную информацию о коллекции книг
            storage.saveUpdatedBooks(libraryModel.booksLib);
            //Применяем фильтр для отображения этой книги
            libraryModel.acceptFilters();

        });

        historyModel.on('add_element',()=>{
            storage.saveHistory(historyModel.history);
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