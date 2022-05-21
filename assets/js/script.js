const sliderMain = new ColSlider ({
    sliderName: "main-slider",
    arrow: true,
    dots: true,
    slidesAreVisible: 1,
    scrollingSpeed: 500,  
    indent: 0,
})

const springSlider = new ColSlider ({
    sliderName: "spring-slider",
    dots: true,
    slidesAreVisible: 1,
    scrollingSpeed: 500,
    indent: 0,
})
const summerSlider = new ColSlider ({
    sliderName: "summer-slider",
    dots: true,
    slidesAreVisible: 1,
    scrollingSpeed: 500,
    indent: 0,
})
const autumnSlider = new ColSlider ({
    sliderName: "autumn-slider",
    dots: true,
    slidesAreVisible: 1,
    scrollingSpeed: 500,
    indent: 0,
})
const winterSlider = new ColSlider ({
    sliderName: "winter-slider",
    dots: true,
    slidesAreVisible: 1,
    scrollingSpeed: 500,
    indent: 0,
})

function isWindowSmall() {
    if(window.innerWidth < 1529) return true;
    const blockScrolling = [...document.querySelectorAll(".block-scrolling")].map(item => item.id);
    let blockNumber = 0;
    function scrollTo(event) { // слежу за прокруткой колеса
        if (event.deltaY > 20 || event.keyCode === 40) {                   //если колесо крутится вниз или нажата кнопка вниз
            if (blockNumber !== blockScrolling.length - 1) blockNumber++;
        }
        else if (event.deltaY < -20 || event.keyCode === 38) { // если колесо крутится вверх или нажата кнопка вверх
            if (blockNumber !== 0) blockNumber--;
        }
        const blockCheckpoint = document.getElementById(blockScrolling[blockNumber]);
        blockCheckpoint.scrollIntoView({
            block: "end",
            behavior: "smooth"
        });
    }
    if (navigator.appVersion.indexOf("Mac")!==-1) {
        document.onwheel = throttle(scrollTo, 300);
    } else {
        document.onwheel = scrollTo;
    }
    document.addEventListener("keyup", function (event) { // обработчик события клавиш
        scrollTo(event);
    });
}


isWindowSmall();