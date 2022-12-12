const { createApp } = Vue;
createApp({
  data(){
    return{
      message : "Hello vue!",
      img : "./img/vue.jpg",
      alt : "vue",
      dimension : "w-50"
    }
  }
}).mount("#app")