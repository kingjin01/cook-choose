const font = document.querySelector('.today .font h4');
const sohwText = '오늘의 추천 음식!';
let index  = 1;

function fontShow(){


    const text = sohwText.slice(0, index);

    if(index > sohwText.length) {
        clearInterval(interval);
    }

    font.textContent = text;

    index++;
}

const interval = setInterval(fontShow, 500);



