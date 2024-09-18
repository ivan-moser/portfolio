let mouseX = 0;
let mouseY = 0;
let gradientX = 0;
let gradientY = 0;

const speed = 1;
const animatedBg = document.getElementById('animated-bg');

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function lerp(start, end, t) {
    return start + (end - start) * t;
}

function animate() {
    gradientX = lerp(gradientX, mouseX, speed);
    gradientY = lerp(gradientY, mouseY, speed);

    animatedBg.style.background = `radial-gradient(circle at ${gradientX}px ${gradientY}px, rgba(30, 42, 70, 1), rgba(15, 23, 42, 1
    ) 40%)`;

    requestAnimationFrame(animate);
}

animate();


