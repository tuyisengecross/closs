<template>
  <div id="app">
    <PuzzleBoard @show-fun-fact="showFunFact" />
    <InfoModal :funFact="currentFunFact" />
  </div>
</template>

<script>
import PuzzleBoard from './components/PuzzleBoard.vue';
import InfoModal from './components/InfoModal.vue';

export default {
  components: {
    PuzzleBoard,
    InfoModal
  },
  data() {
    return {
      currentFunFact: null
    };
  },
  methods: {
    showFunFact(funFact) {
      this.currentFunFact = funFact;
    }
  },
};
</script>

<style>
/* Global styles go here */
</style>
