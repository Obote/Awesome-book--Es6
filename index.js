
const links = document.querySelectorAll('.navbar-list');
const containers = document.querySelectorAll('.container');
const bookHeading = document.querySelector('.book--heading');

const hideAllContainers = () => {
  containers.forEach((container) => {
    container.style.display = 'none';
  });
};
const removeAllActiveLInks = () => {
  links.forEach((link) => {
    link.classList.remove('show--active--link');
  });
};

const dateElement = document.querySelector('.date');
dateElement.innerText = dateData;

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const linkClass = e.currentTarget.classList[1];
    hideAllContainers();
    removeAllActiveLInks();
    e.target.classList.add('show--active--link');
    containers.forEach((container) => {
      if (linkClass === container.id) {
        if (container.id === 'bookList') {
          bookHeading.style.display = 'block';
        } else {
          bookHeading.style.display = 'none';
        }
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  });
});
window.addEventListener('DOMContentLoaded', () => {
  hideAllContainers();
  removeAllActiveLInks();
  containers[0].style.display = 'block';
  links[0].classList.add('show--active--link');
});

this.bookStore = new BookStore();