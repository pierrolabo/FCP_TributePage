console.log('waiting loading');
function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('YouTubeBackgroundVideoPlayer', {
    startSeconds: 100,
    endSeconds: 150,
    //width: 1280, // Player width (in px)
    //height: 720, // Player height (in px)
    width: 1920, // Player width (in px)
    height: 1080, // Player height (in px)
    playerVars: {
      autoplay: 1, // Auto-play the video on load
      autohide: 1,
      disablekb: 1,
      controls: 0, // Hide pause/play buttons in player
      showinfo: 0, // Hide the video title
      modestbranding: 1, // Hide the Youtube Logo
      loop: 1, // Run the video in a loop
      fs: 0, // Hide the full screen button
      autohide: 0, // Hide video controls when playing
      rel: 0,
      enablejsapi: 1,
      startSeconds: 10
    },
    events: {
      onReady: function(e) {
        console.log('ready');
        e.target.mute();
        e.target.setPlaybackQuality('hd1080');
        e.target.loadVideoById({
          videoId: 'ZpHkbNqY7zY',
          startSeconds: 10,
          endSeconds: 197
        });
      },
      onStateChange: function(e) {
        if (e && e.data === 1) {
          var videoHolder = document.getElementById('home-banner-box');
          if (videoHolder && videoHolder.id) {
            videoHolder.classList.remove('loading');
            console.log('removing loading');
          }
          console.log('onstatechanged if');
        } else if (e && e.data === 0) {
          e.target.playVideo();
          console.log('onstatechanged elseif');
        }
      }
    }
  });
}
