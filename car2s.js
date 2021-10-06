let span = document.querySelector('.up');

window.onscroll = function () {
    
    if (this.scrollY >= 600 ){

        span.classList.add('show');

    }else {
        span.classList.remove('show');
    }
};

span.onclick = function () {
    window.scrollTo({

top: 0,
behavior: "smooth", 

    });
};

let spans = document.querySelector('.upr');

spans.onclick = function () {
    window.scrollTo({

top: 900,
behavior: "smooth", 

    });
};
