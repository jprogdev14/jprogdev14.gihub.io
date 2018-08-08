const mobileMenu = document.getElementById('mobile-menu');
const linkList = mobileMenu.children[1].children;

let showMenu = false;
mobileMenu.children[0].addEventListener('click', () => {
    if(!showMenu) {
        mobileMenu.children[1].setAttribute('class', 'show-menu');
        showMenu = true;
    } else {
        mobileMenu.children[1].setAttribute('class', 'hide-menu');
        showMenu = false;
    }
});

for(let i = 0; i < linkList.length; i++) {
    linkList[i].firstChild.addEventListener('click', () => {
        mobileMenu.children[1].setAttribute('class', 'hide-menu');
        showMenu = false;
    });
}
