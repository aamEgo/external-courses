var storage = function () {
    function saveElementToStorage(elementName, elementData) {
        var dataSaveStringfy = JSON.stringify(elementData);
        localStorage.setItem(elementName, dataSaveStringfy);
    }

    function getItemFromStorage(item) {
        var result = JSON.parse(localStorage.getItem(item));
        return result;
    }

    return {
        removeItem: function (item) {
            localStorage.removeItem(item);
        },
        saveHistory: function (historyData) {
            saveElementToStorage('history', historyData);
        },
        saveUpdatedBooks: function (booksData) {
            saveElementToStorage('allBooks', booksData);
        },
        loadFromStorage: function () {
            return {
                allBooks: getItemFromStorage('allBooks') ? getItemFromStorage('allBooks').sort((a, b) => a.id - b.id) : null,
                history: getItemFromStorage('history') ? getItemFromStorage('history').sort((b, a) => a.timeStamp - b.timeStamp) : null
            };
        },
    }
}();
