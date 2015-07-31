'use strict';

var ROOT_ALBUM_DIR = '/assets/album-covers';

// list all the img names that you want to be albums
var albumImages = [  
    { path: "", title: "Cinque Terra", url: "/albums/cinque-terra" },
    { path: "<your image name>", title: "<album title>", url: "<path>" },
    { path: "<your image name>", title: "<album title>", url: "<path>" },
    // copy/paste each `{ ... }` for as many albums as you have
    // Don't forget to have a comma after each `{ ... }` (except the last one!)
];

// This following code is run when the page is loaded
$(document).ready(function() {
    // add the id of the `<div>` container that will hold
    // all of the album cover images below inside `$('')`
    // Remember: to select classes, start with a `.`
    // to select IDs, start with a `#`
    var $albumRow = $(''); 

    // Create a new photo album object and give it the HTML
    // element that all albums cover `<img>` tags should be in
    // and a root directory for where the album cover images live
    var albums = AlbumFactory($albumRow, ROOT_ALBUM_DIR);

    // Load the album images!
    albums.loadImages(albumImages);

});