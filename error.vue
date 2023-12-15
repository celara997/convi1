<script setup lang="ts">
// Page title
const title = ref("404-Page Not Found");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - 404-Page Not Found`
      : "CONVI - 404";
  },
});
</script>
<template>
  <div class="d-flex justify-center align-center text-center h-100vh">
      <div>
          <img src="/images/background/errorimg.svg" width="500" alt="404" />
          <h1 class="text-h1 pt-3">Ups!!!</h1>
          <h4 class="text-h4 my-8">La página no fue encontrada.</h4>
          <v-btn flat color="primary" class="mb-4" to="/">Ir al inicio</v-btn>
      </div>    
  </div>
</template>
