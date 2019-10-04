window.addEventListener('scroll', function () {

    var video = document.getElementById("video");
    //video ofset top
    var posVideo = video.offsetTop;
    var currentScroll = window.pageYOffset;
    var windowheight = window.innerHeight;
    var alturaVideo = video.offsetHeight;


    if (posVideo + alturaVideo < currentScroll + windowheight &&
        posVideo > currentScroll
    ) {
        if (!isPlayng) {
            player.playVideo();
            isPlayng = false;
        }

    } else {
        if (isPlayng) {
            player.pauseVideo();
            isPlayng = true;
        }

    }

    //console.log("posVideo", posVideo);
    //console.log("currentScroll", currentScroll);
    //console.log("windowheight", windowheight);
});