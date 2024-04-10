<template>
    <div class="puzzle-piece" @click="handleClick" :style="{ backgroundImage: `url(${imageUrl})`, backgroundPosition: value.backgroundPosition }"></div>
  </template>
  
  <script>
  export default {
    props: ['value', 'imageUrl'],
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  .puzzle-piece {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    cursor: pointer;
  }
  </style>
  