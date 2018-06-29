let languages = [
    { name: 'HTML', id: 'html', score: 0 },
    { name: 'CSS', id: 'css', score: 0 }
];

function renderPanel(name, id, score) {
    const elem = document.createElement('div');
    elem.classList.add('panel', 'panel-default');

    elem.innerHTML = `
      <div class="panel-body mypanel" id="${id}">
          <h3 class="head">${name}</h3>
          <a href="#" id="score" class="btn btn-primary mybutton" role="button">${score}</a>
      </div>
  `;

    return elem;
}

const container = document.querySelector('.container');

languages.forEach(function (l) {
    const newPanel = renderPanel(l.name, l.id, l.score);
    container.appendChild(newPanel);
});


const panels = document.querySelectorAll('.mypanel');

for (let panel of Array.from(panels)) {
    panel.addEventListener('click', function (e) {
        let clickedPanel = e.target.closest('.mypanel');
        let id = clickedPanel.getAttribute('id');
        let score = document.querySelector('#score');
        //let currentScore = languages[id][score];
        if (languages.id && languages.score === -1) {
            languages.id = currentScore += 1;
            console.log(languages);
        }
    });
}





