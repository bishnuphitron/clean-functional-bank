
function setPlayerStyle(player) {
  player.style.border = '1px solid red';
  player.style.borderRadius = '15px';
  player.style.margin = '10px';
  player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
  setPlayerStyle(player);
  player.addEventListener('click', function () {
    player.style.backgroundColor = 'yellow';
  })
}

function addPlayer() {
  const playersContainer = document.getElementById('players');
  const player = document.createElement('div');
  player.classList.add('player');
  player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint sed aspernatur esse nesciunt impedit omnis dolores maiores voluptatibus! Nobis quisquam provident magni. Ea suscipit tempore laboriosam officiis odio nulla?</p>
  `;
  setPlayerStyle(player);
  playersContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', 
function (event) {
  // console.log(event.target);
  // console.log(event.target.tagName);
  // console.log(event.target.tagName.toLowerCase());
  if (event.target.tagName.toLowerCase() == 'div') {
    event.target.style.backgroundColor = 'yellow';
  }
  else {
    // console.log(event.target.parentNode);
    event.target.parentNode.style.backgroundColor = 'yellow';
  }
})