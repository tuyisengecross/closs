<template>
  <div class="container">

    <!-- v-show Example-->
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">V-Show Directive</h3>
        <button class="btn btn-primary">Toggle Message</button>
        <p v-show="showMessage" class="card-text">This is a hidden message.</p>
      </div>
    </div>

    <!-- v-for Example-->
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">V-for Directive</h3>
        <ul class="list-group">
          <li v-for="(item,index) in items" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- v-bind Example-->
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">V-BIND Directive</h3>
        <img :src="imgSrc" alt="Vue image" class="img-fluid">
      </div>
    </div>

    <!-- v-model Example-->
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">V-model Directive</h3>
        <input type="text" v-model="message" class="form-control">
        <p class="card-text">You Entered: {{ message }}</p>
      </div>
    </div>

    <!-- v-if and v-else-if Example-->
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">V-else-if Directive</h3>
        <p v-if="status ==='success'">Operation Successful.</p>
        <p v-else-if="status ==='error'">Operation Failed.</p>
        <p v-else class="card-text">Operation is Loading.</p>
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
export default{
  setup(){

    //V-show
    const showMessage = ref(false);
    const toggleMessage = () =>{
      showMessage.value = !showMessage.value;
    };
    //V-FOR
    const items = ref(['Inanasi','Imineke', 'Ibisheke','Amata']);

    //V-BIND
    const imgSrc = require('@/assets/logo.png');
    //V-model
    const message = ref('');
    //V-else-if
    const status = ref('error');

    return{
      showMessage,
      toggleMessage,
      items,
      imgSrc,
      message,
      status
    }
  } 
}
</script>
<style scoped>
.container{
  margin-top: 20px;
}
.card{margin-bottom: 20px;}
</style>