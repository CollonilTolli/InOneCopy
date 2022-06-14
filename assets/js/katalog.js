// const productImge = new ColSlider ({
//     sliderName: "slider-product",
//     arrow: true,
//     slidesAreVisible: 1,
//     scrollingSpeed: 500,
//     indent: 10,
// })
$(".slider-product").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$(".vertical-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true
});

let firstCategory = document.querySelectorAll(".first-category");
let secondCategory = document.querySelectorAll(".second-category");

firstCategory.forEach((item, index) => {item.addEventListener('click', () => {menuRemove(); secondRemove(); secondCategory[index].style.fontSize = "16px";})})

secondCategory.forEach((item, index) => {item.addEventListener('click', () => {secondRemove(); item.children[index].style.fontSize = "16px";})})

function menuRemove(){
    firstCategory.forEach((item) => {
        item.style.fontSize = "0px";
    })
    secondCategory.forEach((item) => {
        item.style.fontSize = "0px";
    })
}
function secondRemove(){
    secondCategory.forEach((item) => {
        item.style.fontSize = "0px";
    })
}
