function prepend(container, newElement) {
    container.insertBefore(newElement, container.firstChild);
}

function debounce(fn, delay) {
    var timer = null;
    var context = this;
    var args = arguments;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,args);
        },delay);
    }
}

function timeAgoFromTimestamp(timeFrom) {
    return timeDifference(new Date().getTime(),timeFrom);
}

//

var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope,array[i],i); // passes back stuff we need
    }
};

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed/1000) + ' seconds ago';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed/msPerMinute) + ' minutes ago';
    }

    else if (elapsed < msPerDay ) {
        return Math.round(elapsed/msPerHour ) + ' hours ago';
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
    }
}

var TimeAgo = (function() {
    var self = {};

    // Public Methods
    self.locales = {
        prefix: '',
        sufix:  'ago',

        seconds: 'less than a minute',
        minute:  'about a minute',
        minutes: '%d minutes',
        hour:    'about an hour',
        hours:   'about %d hours',
        day:     'a day',
        days:    '%d days',
        month:   'about a month',
        months:  '%d months',
        year:    'about a year',
        years:   '%d years'
    };

    self.inWords = function(timeAgo) {
        var seconds = Math.floor((new Date() - parseInt(timeAgo)) / 1000),
            separator = this.locales.separator || ' ',
            words = this.locales.prefix + separator,
            interval = 0,
            intervals = {
                year:   seconds / 31536000,
                month:  seconds / 2592000,
                day:    seconds / 86400,
                hour:   seconds / 3600,
                minute: seconds / 60
            };

        var distance = this.locales.seconds;

        for (var key in intervals) {
            interval = Math.floor(intervals[key]);

            if (interval > 1) {
                distance = this.locales[key + 's'];
                break;
            } else if (interval === 1) {
                distance = this.locales[key];
                break;
            }
        }

        distance = distance.replace(/%d/i, interval);
        words += distance + separator + this.locales.sufix;

        return words.trim();
    };

    return self;
}());