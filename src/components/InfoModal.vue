<template>
    <div class="info-modal" v-if="funFact">
      <h2>Fun Fact</h2>
      <p>{{ funFact }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['funFact'],
  };
  </script>
  
  <style scoped>
  .info-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 2px solid #000;
  }
  </style>

