const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn')
const allNavItem = document.querySelectorAll('.nav__item')

const handleNav = () => {
    nav.classList.toggle('nav--active')

    allNavItem.forEach(item => {
        item.addEventListener ('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();
    deleteAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItem.forEach(item => {
        item.classList.toggle('nav-item-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

const deleteAnimation = () => {
    allNavItem.forEach(item => {
        item.classList.remove('nav-items-animation')
    })
}

navBtn.addEventListener ('click', handleNav)