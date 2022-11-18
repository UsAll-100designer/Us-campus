const button = document.querySelector('button');
const onClick = event => event.target.classList.toggle('active');
button.addEventListener('click', onClick);