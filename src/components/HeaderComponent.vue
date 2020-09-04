<template>
  <header class="header">
    <div class="center">
      <!-- LOGO -->
      <div class="logo">
        <img src="../assets/play.png" class="app-logo" alt="Logotipo" />
        <span class="brand">
           
          <router-link to="/" style="text-decoration: none; color: rgb(230, 230, 230);"><strong>VIDEO</strong> TV</router-link>
        </span>
      </div>

      <!-- MENU -->
      <nav class="menu">
        <ul>
          <li>
            <router-link to="/mapa">Ver mapa</router-link>
          </li>
          <li>  
            <router-link to="/formulario">Agregar</router-link>
          </li>
           <li>
            <router-link to="/detalles">Detail</router-link>
          </li>
           <li>
            <router-link to="/listas">List</router-link>
          </li>
           <li>
            <router-link to="/modals">Modal</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
</style>