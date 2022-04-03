const imgAll = document.querySelectorAll("div.slider__item");
const imgAllArr = Array.from(imgAll);
const lenArr = imgAllArr.length;
let numImages = 0;

const left = document.querySelector("div.slider__arrow.slider__arrow_prev");
const right = document.querySelector("div.slider__arrow.slider__arrow_next");

right.onclick = () => {
    if (numImages < lenArr - 1)  {
        imgAllArr[numImages+1].className = "slider__item slider__item_active";
        imgAllArr[numImages].className = "slider__item";
        numImages += 1;
    } else {
        numImages = 0;
        imgAllArr[numImages].className = "slider__item slider__item_active";
        imgAllArr[lenArr - 1].className = "slider__item";
    }
}

left.onclick = () => {
    if (numImages != 0)  {
        imgAllArr[numImages-1].className = "slider__item slider__item_active";
        imgAllArr[numImages].className = "slider__item";
        numImages -= 1;
    } else {
        numImages = lenArr - 1;
        imgAllArr[numImages].className = "slider__item slider__item_active";
        imgAllArr[0].className = "slider__item";
    }
}