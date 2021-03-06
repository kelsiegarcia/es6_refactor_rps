let computerChoice = { name: null,
                       rank: null
                     };
let userChoice = { name: null,
                   rank: null
                };
let total;

let allButtons = document.querySelectorAll('.btn');
allButtons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    clicked(e);
  })
});

let clicked = ( (e) => {
  let num = Number(e.target.getAttribute('data'));
  if (num == 1) {
    userChoice.name = 'Rock';
  } else if (num == 2) {
    userChoice.name = 'Paper';
  } else {
    userChoice.name = 'Scissors';
  }
  userChoice.rank = num;

  getResultsId();
  computersChoice();
});

let displayResults = ( () => {
  display_screen.innerHTML = total;
  display_choices.innerHTML =`Player: ${userChoice.name} Computer: ${computerChoice.name}`;
  total = null;
});

function computersChoice() {
  let rank = Math.floor((Math.random() * 3) + 1);
    if (rank == 1) {
    computerChoice.name = 'Rock';
  } else if (rank == 2) {
    computerChoice.name = 'Paper';
  } else {
    computerChoice.name = 'Scissors';
  }
  computerChoice.rank = rank;
  compareSelection();
}

let compareSelection = ( () => {
  if (computerChoice.rank === userChoice.rank) {
    total = "It's a tie!";
  } else {
    if (userChoice.rank === 1) {
      if (computerChoice.rank === 3) {
        total = "Rock wins";
      } else {
        total = "Paper wins";
      }
    }
    if (userChoice.rank === 2) {
      if (computerChoice.rank === 1) {
        total = "Paper wins";
      } else if (computerChoice.rank === 3) {
        total = "Scissors wins"
      }
    }
    if (userChoice.rank === 3) {
      if (computerChoice.rank === 1) {
        total = "Rock wins cause it's hard as FUH!";
      } else if (computerChoice.rank === 2) {
        total = "Scissors wins";
      }
    }
  }
  displayResults();
});



let getResultsId = ( () => {
  let results = document.getElementById('result');
  let displayChoices = document.getElementById('display_choices');
});