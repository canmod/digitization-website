const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.timeline-image');
        const text = entry.target.querySelector('.content')
        image.style.setProperty('--animate-duration', '0.5s');
        text.style.setProperty('--animate-duration', '0.5s');

        if (entry.isIntersecting) {
            if (entry.target.classList.contains("right")) {
                image.classList.add('animate__animated', 'animate__slideInLeft');
                text.classList.add('animate__animated', 'animate__slideInRight');
            } else {
                image.classList.add('animate__animated', 'animate__slideInRight');
                text.classList.add('animate__animated', 'animate__slideInLeft')
            }
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        if (entry.target.classList.contains("right")) {
            image.classList.remove('animate__animated', 'animate__slideInLeft');
            text.classList.remove('animate__animated', 'animate__slideInRight');
        } else {
            image.classList.remove('animate__animated', 'animate__slideInRight');
            text.classList.remove('animate__animated', 'animate__slideInRight');
        }
    });
});

document.querySelectorAll(".step-container").forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});

