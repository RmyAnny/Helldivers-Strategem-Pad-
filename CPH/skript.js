const output = document.getElementById('arrowOutput');
let sequence = [];

function inputArrow(dir) {
  const arrows = {
    up: '↑',
    down: '↓',
    left: '←',
    right: '→'
  };

  sequence.push(arrows[dir]);
  updateOutput();
}

function updateOutput() {
  output.textContent = sequence.join(' ');
}
