(function () {
    "use strict";
    let movie = document.getElementById('movie'),
    program = document.getElementById('program'),
    videos = document.getElementById('videos'),
    programs = document.getElementById('programs');

    movie.onclick = () => {
        movie.style.color = '#979797';
        program.style.color = '#D4D4D4';
        let intViewportWidth = window.innerWidth;
        if (intViewportWidth >= 600){
            videos.style.display = 'flex';
        } else {
            videos.style.display = 'block';
        }
        programs.style.display = 'none';
    }

    program.onclick = () => {
        program.style.color = '#979797';
        movie.style.color = '#D4D4D4';
        videos.style.display = 'none';
        let intViewportWidth = window.innerWidth;
        if (intViewportWidth >= 600){
            programs.style.display = 'flex';
        } else {
            programs.style.display = 'block';
        }
    }

    
})();