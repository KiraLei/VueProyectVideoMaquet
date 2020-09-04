<template>
  <div class="modal-container">
    <div class="modal">
      <div class="header-modal">
        <h2>Eliminar Video</h2>
        <button>X</button>
      </div>
      <div class="line"></div>
      <div>
        <h3>¿Estas seguro que quieres eliminar este video ?</h3>
      </div>
      <div class="buttons">
        <button class="btn">Eliminar</button>
        <button class="btn cancel">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
};
</script>

