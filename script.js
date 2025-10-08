//draggable element


const element = document.querySelector(".draggable-el");
let isDragging = false;
let lastX = 0;
let lastY = 0;

element.addEventListener("mousedown", (event) => {
    isDragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    element.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) =>{
    if(!isDragging) return;

    const deltaX = event.clientX - lastX;
    const deltaY = event.clientY - lastY;

    const elementX = parseInt(window.getComputedStyle(element).getPropertyValue('left'));
    const elementY = parseInt(window.getComputedStyle(element).getPropertyValue('top'));

    element.style.left = `${elementX + deltaX}px`;
    element.style.top = `${elementY + deltaY}px`;

    lastX = event.clientX;
    lastY = event.clientY;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    element.style.cursor = "grab";
});


//HEART ON CLICK


// const container = document.querySelector('.portfolio-item-heart-img')

// container.addEventListener('dblclick', (e) => {
//     createHeart(e)
// })

// const createHeart = (e) => {
//     let heart = document.createElement('i')
//     heart.classList.add('fa-solid')
//     heart.classList.add('fa-heart')

//     xValue = e.clientX - e.target.offsetLeft
//     yValue = e.clientY - e.target.offsetTop

//     heart.style.top = `${yValue}px`
//     heart.style.left = `${xValue}px`

//     container.append(heart)
//     setTimeout(() => heart.remove(), 1000)
// }

// const containers = document.querySelectorAll('.portfolio-item-heart-img')

// containers.forEach(container => {
//     container.addEventListener('dblclick', (e) => {
//         createHeart(e.pageX, e.pageY);
//     })
// })

// containers.forEach(container => {
//     container.addEventListener('touchend', (e) => {
//         let touch = e.changedTouches[0];
//         createHeart(touch.pageX, touch.pageY);
//     })
// })

// function createHeart(x, y) {
//     let heart = document.createElement('img');
//     heart.src = 'images/heart.png';
//     heart.classList.add('heart');

//     heart.style.top = `${y}px`
//     heart.style.left = `${x}px`

//     document.body.appendChild(heart);

//     setTimeout(() => heart.remove(), 1000)
// }

document.querySelectorAll('.portfolio-item-heart-img').forEach(container => {
    let touchStartX = 0;
    let touchStartY = 0;

    // Track where touch started
    container.addEventListener('touchstart', (e) => {
        let touch = e.changedTouches[0];
        touchStartX = touch.pageX;
        touchStartY = touch.pageY;
    });

    // Handle touch end
    container.addEventListener('touchend', (e) => {
        let touch = e.changedTouches[0];
        let dx = Math.abs(touch.pageX - touchStartX);
        let dy = Math.abs(touch.pageY - touchStartY);

        // If finger didn't move much → treat as tap
        if (dx < 5 && dy < 5) {
            createHeart(touch.pageX, touch.pageY);
        }
    });

    // Still support desktop double click
    container.addEventListener('dblclick', (e) => {
        createHeart(e.pageX, e.pageY);
    });
});

function createHeart(x, y) {
    let heart = document.createElement('img');
    heart.src = 'images/heart.png';
    heart.classList.add('heart');

    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;

    let rotation = (Math.random() * 60) - 30;
    heart.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
}

// const createHeart = (e, container) => {
//     let heart = document.createElement('img');
//     heart.src = 'images/heart.png';
//     heart.classList.add('heart');
    
//     // const rect = container.getBoundingClientRect()

//     // let xValue = e.clientX - rect.left
//     // let yValue = e.clientY - rect.top

//     // heart.style.top = `${yValue}px`
//     // heart.style.left = `${xValue}px`

//     document.body.appendChild(heart);

//     // container.append(heart)
//     setTimeout(() => heart.remove(), 1000)
// }