<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>

    <!--<FooterComponent></FooterComponent> -->
    <div>
      <!-- <ButtonAddComponent> </ButtonAddComponent> -->
      <!--<AddVideoComponent></AddVideoComponent>  -->
     <!-- <MapComponent></MapComponent> -->
     <!--<ListVideoComponent></ListVideoComponent>-->
    <!-- <DetailComponent></DetailComponent> -->
    <!--<ModalComponent></ModalComponent> -->
    <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>

import HeaderComponent from "./components/HeaderComponent.vue";
//import ButtonAddComponent from "./components/ButtonAddComponent.vue";
//import AddVideoComponent from "./components/AddVideoComponent.vue";
//import MapComponent from "./components/MapComponent.vue";
//import ListVideoComponent from "./components/ListVideoComponent.vue";
//import DetailComponent from "./components/DetailComponent.vue";
//import ModalComponent from "./components/ModalComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";



export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent
    // ButtonAddComponent,
    //AddVideoComponent,
   // MapComponent,
   //ListVideoComponent,
   //DetailComponent,
  // ModalComponent

    
  },
};
</script>

<style>
#app {
  /*
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
}
@import "./assets/css/styles.css";
</style>
