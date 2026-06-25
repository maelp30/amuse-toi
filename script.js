const games = [
  {name:"Snake", link:"snake.html"},
  {name:"Pong", link:"pong.html"},
  {name:"2048", link:"2048.html"},
  {name:"Tetris", link:"tetris.html"},
  {name:"Car Racer", link:"carracer.html"}
];

const container = document.getElementById('games');

function render(list){
  container.innerHTML = '';

  list.forEach(game => {
    container.innerHTML += `
      <div class="card">
        <h3>${game.name}</h3>
        <a href="${game.link}">
          <button>Jouer</button>
        </a>
      </div>
    `;
  });
}

render(games);

document.getElementById('search').addEventListener('input', e => {
  render(
    games.filter(game =>
      game.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
  );
});
