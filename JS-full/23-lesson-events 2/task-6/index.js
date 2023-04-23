const el = document.querySelector('.single-use-btn');

function func() {
  console.log('clicked');
  el.removeEventListener('click', func);
}
el.addEventListener('click', func);
