import paintGoblin from "./paintGoblin";

export default function gameplay() {
  const fieldParts = [...document.querySelectorAll('.field-part')];

  let hit = 0;
  let miss = 0;

  fieldParts.forEach(elem => {
    elem.addEventListener('click', () => {
      
      if (elem.classList.contains('active_field-part')) {
        hit++;
        const hitInfo = document.querySelector('.hit-info'); 
        hitInfo.innerHTML = `
        <span class="game-info-text hit-info">Попаданий: ${hit}</span>
        `;
        paintGoblin();
      } else {
        miss++;
        const missInfo = document.querySelector('.miss-info'); 
        missInfo.innerHTML = `
        <span class="game-info-text miss-info">Промахов: ${miss}</span>
        `;
      }

      if (hit === 10) {
        alert(`Вы победили! Количество попаданий: ${hit}`);
        location.reload();
      }
      if (miss === 5) {
        alert(`Вы проиграли! Количество промахов: ${miss}`);
        location.reload();
      }
    });
  });
}