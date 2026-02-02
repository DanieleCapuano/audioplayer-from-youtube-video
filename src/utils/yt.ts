
let videoId = '';
let player: any;
let videoPromiseRes: any, videoPromiseRej: any;
let videoPromise = new Promise((res, rej) => {
    videoPromiseRes = res;
    videoPromiseRej = rej;
});
let videoStatus: any;

declare global {
    // Note the capital "W"
    interface Window { YT: any; }
}

export function setupVideo(vid: any) {
    videoId = vid;
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag: any = document.getElementsByTagName('script')[0];
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
    const yt: any = window.YT;
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
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady() {
    videoPromiseRes(player);
}
function onPlayerStateChange(event: any) {
    const yt: any = window.YT;
    if (event.data == yt.PlayerState.PLAYING) {
        videoStatus = event.data;
    }
    else {
        videoStatus = null;
    }
}


export async function playVideo() {
    videoPromise.then((pl: any) => {
        pl.playVideo();
    });
}
export async function pauseVideo() {
    videoPromise.then((pl: any) => {
        pl.pauseVideo();
    });
}
export async function stopVideo() {
    videoPromise.then((pl: any) => {
        pl.stopVideo();
    });
}