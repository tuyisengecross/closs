<template>
    <div class="puzzle-board">
      <PuzzlePiece
        v-for="(piece, index) in pieces"
        :key="index"
        :value="piece"
        @click="movePiece(index)"
        :imageUrl="piece.imageUrl"
      />
      <div v-if="gameOver" class="result-message">{{ gameOverMessage }}</div>
    </div>
  </template>
  
  <script>
  import PuzzlePiece from './PuzzlePiece.vue';
  
  export default {
    components: {
      PuzzlePiece
    },
    data() {
      return {
        pieces: [], // Array to store puzzle pieces
        emptyIndex: 0, // Index of the empty slot
        winMessage: "Congratulations! You solved the puzzle.", // Message to display when puzzle is solved
        loseMessage: "Sorry, you couldn't solve the puzzle in time.", // Message to display when player loses
        funFacts: [
          "Fun Fact 1",
          "Fun Fact 2",
          "Fun Fact 3",
          // Add more fun facts as needed
        ],
        currentFunFactIndex: 0, // Index to track current fun fact
        gameWon: false, // Flag to indicate if the game is won
        gameLost: false, // Flag to indicate if the game is lost
        maxMoves: 50, // Maximum number of moves allowed
        moves: 0 // Number of moves made by the player
      };
    },
    computed: {
      gameOver() {
        return this.gameWon || this.gameLost;
      },
      gameOverMessage() {
        return this.gameWon ? this.winMessage : this.loseMessage;
      }
    },
    methods: {
      shuffle() {
        // Fisher-Yates shuffle algorithm to shuffle the pieces
        for (let i = this.pieces.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.pieces[i], this.pieces[j]] = [this.pieces[j], this.pieces[i]];
        }
      },
      movePiece(index) {
        // Logic to move puzzle pieces
        if (!this.gameOver && this.isAdjacent(index)) {
          // Swap the clicked piece with the empty slot
          [this.pieces[this.emptyIndex], this.pieces[index]] = [this.pieces[index], this.pieces[this.emptyIndex]];
          this.emptyIndex = index;
          this.moves++;
          if (this.checkWin()) {
            this.gameWon = true;
            this.showFunFact();
          } else if (this.moves >= this.maxMoves) {
            this.gameLost = true;
          }
        }
      },
      isAdjacent(index) {
        // Check if the clicked piece is adjacent to the empty slot
        const row = Math.floor(index / 3);
        const col = index % 3;
        const emptyRow = Math.floor(this.emptyIndex / 3);
        const emptyCol = this.emptyIndex % 3;
        return (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1);
      },
      checkWin() {
        // Check if the puzzle is solved
        for (let i = 0; i < this.pieces.length - 1; i++) {
          if (this.pieces[i].number !== i + 1) {
            return false;
          }
        }
        return true;
      },
      showFunFact() {
        // Show a random fun fact upon winning the puzzle
        this.$emit('show-fun-fact', this.funFacts[this.currentFunFactIndex]);
        this.currentFunFactIndex = (this.currentFunFactIndex + 1) % this.funFacts.length;
      }
    },
    mounted() {
      // Initialize puzzle pieces
      for (let i = 1; i <= 8; i++) {
        this.pieces.push({ number: i, imageUrl: require('@/assets/puzzle1.jpg'), backgroundPosition: '' });
      }
      // Add empty slot at a random position
      this.emptyIndex = Math.floor(Math.random() * 8);
      this.pieces.splice(this.emptyIndex, 0, { number: null, imageUrl: '', backgroundPosition: '' });
      // Shuffle pieces
      this.shuffle();
    },
  };
  </script>
  
  <style scoped>
  .puzzle-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
  }
  
  .result-message {
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
  }
  
  .win-message {
    color: green;
  }
  
  .lose-message {
    color: red;
  }
  </style>
  