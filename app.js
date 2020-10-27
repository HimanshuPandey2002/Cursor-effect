var mouseCursor = document.querySelector(".cursor");
var navlinks = document.querySelectorAll(".nav-links li");

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}

navlinks.forEach(links => {
  links.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('list-grow');
    links.classList.remove('hovered-list');
  })
  links.addEventListener('mouseover', () => {
    mouseCursor.classList.add('list-grow');
    links.classList.add('hovered-list');
  })
});