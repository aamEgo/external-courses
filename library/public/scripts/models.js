class Book {
    constructor(id,title,author,rating,cost,categories,createdAt,updatedAt,image_url){
        this._id = id;
        this._title = title;
        this._author = author;
        this._rating = rating;
        this._cost = cost;
        this._categories = categories;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
        this._image_url = image_url;
    }


    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get rating() {
        return this._rating;
    }

    get cost() {
        return this._cost;
    }

    get categories() {
        return this._categories;
    }

    get createdAt() {
        return this._createdAt;
    }

    get updatedAt() {
        return this._updatedAt;
    }

    get image_url() {
        return this._image_url;
    }

}