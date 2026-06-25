const games=[
'Snake','Pong','Tetris','Flappy Bird','Car Racer','Drift Challenge',
'Highway Driver','Parking Master','Tank Battle','Space Shooter',
'Alien Attack','Zombie Survival','Platform Adventure','Jump Hero',
'Football Stars','Basketball Challenge','Memory Cards','Sudoku',
'Maze Escape','Chess','Checkers','2048'
];
const container=document.getElementById('games');
function render(list){
container.innerHTML='';
list.forEach(g=>container.innerHTML+=`<div class="card"><h3>${g}</h3><button>Bientôt disponible</button></div>`);
}
render(games);
document.getElementById('search').addEventListener('input',e=>{
render(games.filter(g=>g.toLowerCase().includes(e.target.value.toLowerCase())));
});
