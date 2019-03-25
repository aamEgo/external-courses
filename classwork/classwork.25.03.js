function EpamPlayer() {
    var tracks = [];
    var volume = 50;
    var playIndex = -1;
    var playing = false;

    function logTrackStatus() {
        if (playIndex == -1) {
            console.info('No track');
            return;
        }
        if (playing)
            console.log('Track %s - %s is currently playing', tracks[playIndex].artist, tracks[playIndex].title);
        else
            console.log('Track %s - %s on pause', tracks[playIndex].artist, tracks[playIndex].title);
    }

    function addTrack(artist, title) {
        tracks.push({artist: artist, title: title});
        return addTrack;
    }

    function filterByArtist(artist) {
        return tracks.filter(value => value.artist == artist);
    }

    function findByMatch(str) {
        return tracks.filter(value => value.title.indexOf(str) > -1);
    }

    function getIndexOf(artist, title) {
        return tracks.findIndex(value => value.artist == artist && value.title == title);
    }

    function play(index) {
        playIndex = index;
        playing = true;
        console.log('Track %s - %s now playing', tracks[index].artist, tracks[index].title);
    }

    function playingNow() {
        logTrackStatus();
    }

    function stop() {
        playIndex = -1;
        playing = false;
    }

    function pause() {
        playing = false;
        logTrackStatus();
    }

    function volumeUp() {
        ++volume;
    }

    function volumeDown() {
        --volume;
    }

    function status() {
        logTrackStatus();
        console.log('volume = %s', volume);
    }

    function getPlayList() {
        return tracks;
    }

    return {
        addTrack: addTrack,
        filterByArtist: filterByArtist,
        findByMatch: findByMatch,
        getIndexOf: getIndexOf,
        play: play,
        playingNow: playingNow,
        stop: stop,
        pause: pause,
        volumeUp: volumeUp,
        volumeDown: volumeDown,
        status: status,
        getPlayList: getPlayList,
    }
}

function test() {
    var epamPlayer = EpamPlayer();
    epamPlayer.addTrack('Hollywood Undead', 'Young')('Hollywood Undead', 'Lion')('Tarja Turunen', 'Little Lies');
    console.info(epamPlayer.filterByArtist('Hollywood Undead'));
    console.info(epamPlayer.findByMatch('oun'));
    console.info(epamPlayer.getPlayList());
    console.info(epamPlayer.getIndexOf('Hollywood Undead', 'Lion'));
    epamPlayer.play(2);
    epamPlayer.playingNow();
    epamPlayer.pause();
    epamPlayer.status();
    epamPlayer.volumeUp();
    epamPlayer.volumeUp();
    epamPlayer.stop();
    epamPlayer.status();
}

test();