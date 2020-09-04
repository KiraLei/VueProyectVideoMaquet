<template>
  <div class="divAdd">
    <h2>Agregar video</h2>
    <div class="line"></div>
    <form action>
      <div class="inputs">
        <input type="text" placeholder="Titulo" />
        <input type="text" placeholder="url video" />
      </div>
      <textarea name="texarea" cols="30" rows="10" placeholder="Descripcion"></textarea>
      <div class="buttons">
          <button class="btn">Agregar</button>
          <button class="btn cancel">Cancelar</button>
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  name: "AddVideoComponent",
};
</script>