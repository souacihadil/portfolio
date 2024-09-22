const text = "Isaac Souaci";
let index = 0;
let isDeleting = false;

function type() {
    const currentText = text.substring(0, index);
    document.getElementById("typed-text").textContent = currentText;

    if (!isDeleting && index === text.length) {
        return;
    }

    if (!isDeleting && index === text.length + 1) {
        isDeleting = true;
    }

    if (isDeleting && index === 0) {
        isDeleting = false;
    }

    if (isDeleting) {
        index--;
    } else {
        index++;
    }

    const speed = isDeleting ? 150 : 150;
    setTimeout(type, speed);
}

window.onload = function() {
    type();
};

const aboutImage = document.querySelector('.about-image img');
let distance = 0;
let direction = 1;

function moveImage() {
    const step = 1;
    const maxDistance = 5;

    distance += step * direction;
    if (Math.abs(distance) >= maxDistance) {
        direction *= -1;
    }

    aboutImage.style.transform = `translateX(${distance}px)`;
}

const intervalDuration = 100;
setInterval(moveImage, intervalDuration);

function playTransition(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutQuad'
    });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            playTransition(target);
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 1000); // انتظر حتى انتهاء التأثير ثم قم بتحويل الصفحة
        }
    });
});
