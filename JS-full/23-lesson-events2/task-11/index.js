const manageClasses = () => {
  const elementAdd = document.querySelector('.one');
  elementAdd.classList.add('selected');
  const elementRemove = document.querySelector('.two');
  elementRemove.classList.remove('selected');
  const elementToggle = document.querySelector('.three');
  elementToggle.classList.toggle('three_done');
  const elementAddIf = document.querySelector('.four');
  if ('some-class') {
    elementAddIf.classList.add('another-class');
  }
};
console.log(manageClasses());
