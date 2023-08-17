const burgerMenu = () => {
    const iconMenu = document.querySelector('.nav__icon');
    const navigation = document.querySelector('.nav__body');
    const WINDIW_WIDTH = 651;

    const removeAddedClasses = () => {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        navigation.classList.remove('_active');
    };

    const toggleClasses = () => {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        navigation.classList.toggle('_active');
    };

    iconMenu.addEventListener('click', () => {
        toggleClasses();
    });

    navigation.addEventListener('click', ({ target }) => {
        if (window.innerWidth < WINDIW_WIDTH) {
            if (target.closest('.nav__link')) {
                removeAddedClasses();
            } else {
                return;
            }
        } else {
            return;
        }
    });
};

export default burgerMenu;
