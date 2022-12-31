require('./scss/style.scss');

// Some random colors
const colors = ["#fff"];
const numBalls = 10;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 7000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});

const charBtns = document.querySelectorAll('.class-main__link');
const charLayer = document.querySelector('.section-class-detail');
const classTabReturn = document.querySelector('#a_sub_class_tab_return');

charBtns.forEach(function (charBtn) {
    charBtn.addEventListener('click', function () {
        charLayer.classList.add('section-class-detail--open')
        charLayer.dataset.selectedCharacter = 1;
    })
});
classTabReturn.addEventListener('click', function () {
    charLayer.classList.remove('section-class-detail--open')
});

charBtns[0].addEventListener('click', function () {
    charLayer.dataset.selectedClass = 'sorceress';
})
charBtns[1].addEventListener('click', function () {
    charLayer.dataset.selectedClass = 'maiden';
})
charBtns[2].addEventListener('click', function () {
    charLayer.dataset.selectedClass = 'warrior';
})
charBtns[3].addEventListener('click', function () {
    charLayer.dataset.selectedClass = 'rogue';
})
charBtns[4].addEventListener('click', function () {
    charLayer.dataset.selectedClass = 'priest';
})

// const classSelectLink = document.querySelectorAll('.class-select__link');
// classSelectLink.forEach(function (selectClass, index) {
//     index = `${index + 1}`;
//     console.log(index)
//     selectClass.addEventListener('click', function () {
//         if (classSelectLink[0]) {
//             charLayer.dataset.selectedClass = 'sorceress';
//         }
//     })
// console.log(classSelectLink)
// });

const dataClasses = document.querySelectorAll('.character-sel__link');
dataClasses.forEach(function (charClass, index) {
    index = `${index + 1}`;
    if (index % 2 === 0) {
        charClass.dataset.classIndex = 2;
        charClass.addEventListener('click', function () {
            charLayer.dataset.selectedCharacter = 2;
        })
    } else {
        charClass.dataset.classIndex = 1
        charClass.addEventListener('click', function () {
            charLayer.dataset.selectedCharacter = 1;
        })
    }
});