const blockObserver = () => {
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const targetElement = entry.target;

                    targetElement.classList.add('_animate');
                    observer.unobserve(targetElement);
                }
            });
        },
        { root: null, threshold: 0.05 }
    );

    const observableAnimation = document.querySelectorAll(`[data-name="observable-block`);
    observableAnimation.forEach((element) => {
        observer.observe(element);
    });
};

export default blockObserver;
