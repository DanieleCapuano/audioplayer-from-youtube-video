let videoId = '';
let player;
let videoPromiseRes;
let videoPromise = new Promise((res) => {
    videoPromiseRes = res;
});
export function setupVideo(vid) {
    videoId = vid;
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //this will be called by the YT API
    Object.assign(window, {
        onYouTubeIframeAPIReady
    });
    return videoPromise;
}
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    const yt = window.YT;
    player = new yt.Player('player', {
        height: '390',
        width: '640',
        videoId: videoId,
        playerVars: {
            'playsinline': 1,
            "controls": 0,
            autoplay: 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}
function onPlayerReady() {
    videoPromiseRes(player);
}
export async function playVideo() {
    videoPromise.then((pl) => {
        pl.playVideo();
    });
}
export async function pauseVideo() {
    videoPromise.then((pl) => {
        pl.pauseVideo();
    });
}
export async function stopVideo() {
    videoPromise.then((pl) => {
        pl.stopVideo();
    });
}
