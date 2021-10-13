const butt = document.querySelector('.like_button');
const buttNum = document.querySelector('.like_button_span');

let like = 11;
increaseLike = () => {
    like ++
    buttNum.innerHTML = like;
    if (like = 11) {
        return
    }
};

likeClick = () => {
    increaseLike()
};

butt.addEventListener(('click'), likeClick);