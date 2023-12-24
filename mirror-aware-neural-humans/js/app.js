// shih-yang&daniel: create lists of bibtex to uniquely lookup for citation rendering 
$(document).ready(function() {
    const id_lists = ["bibtex", "bibtex1", "bibtex2"]
    for (let i=0; i < id_lists.length; i++){
    var editor = CodeMirror.fromTextArea(document.getElementById(id_lists[i]), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly:true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    }

// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500, 
//     // get page height from video duration
//     setHeight = document.getElementById("main"), 
//     // select video element         
//     vid = document.getElementById('v0'); 
//     // var vid = $('#v0')[0]; // jquery option

    
    

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// console.log('scroll');
// }
    
// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });
    
    
//     window.requestAnimationFrame(scrollPlay);
});
