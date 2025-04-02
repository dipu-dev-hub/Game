# Game
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rock Paper Scissors Game</title>
    <link rel="stylesheet" href="Game.css" />
  </head>
  <body>
    <h1> 
      <button>How to Play</button> 
      <span>Rock Paper Scissors Game</span>
    </h1>
    <div class="choices">
      <div class="choice" id="rock">
        <img src="./Project_7thFeb2025/rock.png" />

      </div>
      <div class="choice" id="paper">
        <img src="paper.png" />
      </div>
      <div class="choice" id="scissors">
        <img src="scissors.png" />
      </div>
    </div>

    <div class="score-board">
      <div class="score">
        <p id="user-score">0</p>
        <p>You</p>
      </div>
      <div class="score">
        <p id="comp-score">0</p>
        <p>Comp</p>
      </div>
    </div>

    <div class="msg-container">
      <p id="msg">Play your move</p>
    </div>
    <script src="Game.js"></script>
  </body>
</html>
