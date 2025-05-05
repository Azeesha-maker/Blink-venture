function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



// counter-
  
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter-number');

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const speed = 200;
        const increment = Math.ceil(target / speed);

        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.textContent = current + '+';
                setTimeout(updateCount, 20);
            } else {
                counter.textContent = target + '+';
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});

