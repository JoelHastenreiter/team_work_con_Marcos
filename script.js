window.addEventListener('scroll', function (){
    var video = document.getElementById("video");
    var posVideo = video.offsetTop;
    var alturaVideo = video.offsetHeight;
    var currentScroll = window.pageYOffset;
    var windowHeight = window.innerHeight;

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

   // console.log("posVideo", posVideo);
    // console.log("currentScroll", currentScroll);
    // console.log("windowHeight", windowHeight);
});