const imgAll = document.querySelectorAll("div.slider__item");
const imgAllArr = Array.from(imgAll);
const lenArr = imgAllArr.length;
let numImages = 0;

const left = document.querySelector("div.slider__arrow.slider__arrow_prev");
const right = document.querySelector("div.slider__arrow.slider__arrow_next");

// вариант 1

function checkIndex(element) {
    return element.className === "slider__item slider__item_active"; 
}

right.onclick = () => {
    numImages = imgAllArr.findIndex(checkIndex);
    imgAllArr[numImages].className = "slider__item";
    numImages = numImages === lenArr - 1 ? 0 : numImages += 1;
    imgAllArr[numImages].className = "slider__item slider__item_active";
}

left.onclick = () => {
    numImages = imgAllArr.findIndex(checkIndex);
    imgAllArr[numImages].className = "slider__item";
    numImages = numImages === 0 ? lenArr - 1 : numImages -= 1;
    imgAllArr[numImages].className = "slider__item slider__item_active";
}

// вариант 2

// right.onclick = () => {
//     imgAllArr[numImages].className = "slider__item";
//     numImages = numImages == lenArr - 1 ? 0 : numImages += 1;
//     imgAllArr[numImages].className = "slider__item slider__item_active";
// }

// left.onclick = () => {
//     imgAllArr[numImages].className = "slider__item";
//     numImages = numImages == 0 ? lenArr - 1 : numImages -= 1;
//     imgAllArr[numImages].className = "slider__item slider__item_active";
// }