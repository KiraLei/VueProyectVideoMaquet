import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import AddVideoComponent from './components/AddVideoComponent';
import DetailComponent from './components/DetailComponent';
import ModalComponent from './components/ModalComponent';
import ListVideoComponent from './components/ListVideoComponent';
import MapComponent from './components/MapComponent'; 
import ButtonAddComponent from './components/ButtonAddComponent';

import List from './components/List';
import Detail from './components/Detail';
import SeeMap from './components/SeeMap';
import AddForm from './components/AddForm';
import Modal from './components/Modal';
Vue.use(VueRouter);

/*
export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/path', component: component }
  ]
});*/

Vue.config.productionTip = false

const routes = [
  { path: '/', component: ButtonAddComponent},
  { path: '/formulario', component: AddVideoComponent},
  { path: '/listas', component: ListVideoComponent},
  { path: '/detalles', component: DetailComponent},
  { path: '/modals', component: ModalComponent},
  { path: '/mapa', component: MapComponent},

  { path: '/listas', component: List},
  { path: '/detalles', component: Detail},
  { path: '/mapa', component: SeeMap},
  { path: '/formulario', component: AddForm},
  { path: '/modals', component: Modal},


  

];

const router = new VueRouter({
  routes,
  mode: 'history'

});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
