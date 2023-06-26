import paintGoblin from './paintGoblin';

export default function gameplay() {
  const fieldParts = [...document.querySelectorAll('.field-part')];

  let intervalId = setInterval(paintGoblin, 1000);

  let hit = 0;
  let miss = 0;

  fieldParts.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (elem.classList.contains('active_field-part')) {
        hit++;
        const hitInfo = document.querySelector('.hit-info');
        hitInfo.innerHTML = `
        <span class="game-info-text hit-info">Попаданий: ${hit}</span>
        `;
        // перезапуск интервала
        clearInterval(intervalId);
        document.querySelector('.active_field-part').classList.remove('active_field-part');
        intervalId = setInterval(paintGoblin, 1000);
      } else {
        miss++;
        const missInfo = document.querySelector('.miss-info');
        missInfo.innerHTML = `
        <span class="game-info-text miss-info">Промахов: ${miss}</span>
        `;
      }

      if (hit === 10) {
        alert(`Вы победили! Количество попаданий: ${hit}`);
        // eslint-disable-next-line
        location.reload();
      }
      if (miss === 5) {
        alert(`Вы проиграли! Количество промахов: ${miss}`);
        // eslint-disable-next-line
        location.reload();
      }
    });
  });
}
