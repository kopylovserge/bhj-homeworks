const imgAll = document.querySelectorAll("div.slider__item");
const imgAllArr = Array.from(imgAll);
const lenArr = imgAllArr.length;
let numImages = 0;

const left = document.querySelector("div.slider__arrow.slider__arrow_prev");
const right = document.querySelector("div.slider__arrow.slider__arrow_next");

// function checkIndex(index) {
//     element = imgAllArr[index];
//     if (element.className === "slider__item slider__item_active") {
//         return index;
//     } else {
//         return false;
//     }
// }
// right.onclick = () => {
//     numImages = imgAllArr.findIndex(checkIndex(numImages));
//     imgAllArr[numImages].className = "slider__item";
//     numImages = numImages == lenArr - 1 ? 0 : numImages += 1;
//     imgAllArr[numImages].className = "slider__item slider__item_active";
// }

right.onclick = () => {
    imgAllArr[numImages].className = "slider__item";
    numImages = numImages == lenArr - 1 ? 0 : numImages += 1;
    imgAllArr[numImages].className = "slider__item slider__item_active";
    
}

left.onclick = () => {
    imgAllArr[numImages].className = "slider__item";
    numImages = numImages == 0 ? lenArr - 1 : numImages -= 1;
    imgAllArr[numImages].className = "slider__item slider__item_active";
    
}