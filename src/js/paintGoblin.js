const fieldParts = [...document.querySelectorAll('.field-part')];

export default function paintGoblin() {
  const activeFieldPart = document.querySelector('.active_field-part');
  let prevIndex = null;

  if (activeFieldPart) {
    activeFieldPart.classList.remove('active_field-part');
    // eslint-disable-next-line
    prevIndex = index;
  }

  let index = Math.floor(Math.random() * 16);

  while (prevIndex === index) {
    index = Math.floor(Math.random() * 16);
  }

  fieldParts[index].classList.add('active_field-part');
}
