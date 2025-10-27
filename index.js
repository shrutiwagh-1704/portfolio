const toggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.navLinks');

toggle.addEventListener('click', () => {
  console.log("hello");
  navLinks.classList.toggle('active');
});
