let computerChoice = { name: null,
                       rank: null
                     };
let userChoice = { name: null,
                   rank: null
                };
let total;

function usersChoice() {
  args = Number(arguments[0])
  if (args == 1) {
    userChoice.name = 'Rock';
  } else if (args == 2) {
    userChoice.name = 'Paper';
  } else {
    userChoice.name = 'Scissors';
  }
  userChoice.rank = args;

  getResultId(); 
  computersChoice();
};

let displayResults = ( () => {
  display_screen.innerHTML = total;
  display_choices.innerHTML =`Player: ${userChoice.name} Computer: ${computerChoice.name}`;
});

function computersChoice() {
  rank = Math.floor((Math.random() * 3) + 1);
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
  if (computerChoice.rank == userChoice.rank) {
    total =  "It's a tie!";
  } else {
    if (userChoice.rank === 1) {
      if (computerChoice.rank === 3) {
        total =  "Rock wins";
      } else {
        total =  "Paper wins";
      }
    }
    if (userChoice.rank === 2) {
      if (computerChoice.rank === 1) {
        total =  "Paper wins";
      } else if (computerChoice.rank === 3) {
       total = "Scissors wins";
      }
    }
    if (userChoice.rank === 3) {
      if (computerChoice.rank === 1) {
        total =  "Rock wins cause it's hard as Fuh";
      } else if(computerChoice.rank === 2) {
        total = "Scissors wins";
      }
    }
  }
  displayResults();
});

let getResultId = ( () => {
  let results = document.getElementById('result');
  let displayChoices = document.getElementById('display_choices');
});
