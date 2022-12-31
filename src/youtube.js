var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player('player-sorceress1', {
        videoId: 'PUC2tcUbOq8',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-sorceress2', {
        videoId: 'ykrU9tzEDwk',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-maiden1', {
        videoId: 'fRiytjXwJ3A',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-maiden2', {
        videoId: 'eYGLzbVIXho',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-warrior1', {
        videoId: 'y2MS4Aqmtwo',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-warrior2', {
        videoId: 'SKn56U418oo',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-rogue1', {
        videoId: '0k6iNxv-eZQ',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-rogue2', {
        videoId: 'lw-1IoIai68',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-priest1', {
        videoId: 'k_sX45fq5fM',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
    new YT.Player('player-priest2', {
        videoId: '8DHBtYPDKoU',
        playerVars: {
            'rel': 0,
            'controls': 0,
            'autoplay': 1,
            'mute': 1,
            'loop': 0,
            'playsinline': 1,
        }
    });
}

