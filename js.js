const numParticles = 50; // Number of flower particles
const particleContainer = document.querySelector('.particles-container');

// Generate flower particles
for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particleContainer.appendChild(particle);
}

// Randomize starting position and animation duration for each particle
const particles = document.querySelectorAll('.particle');
particles.forEach(particle => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const duration = Math.random() * 3 + 1; // Random duration between 3 to 8 seconds

    particle.style.left = `${randomX}px`;
    particle.style.top = `${randomY}px`;
    particle.style.animationDuration = `${duration}s`;
});
