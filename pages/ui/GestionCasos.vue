<script setup lang="ts">
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";
</script>
<template>
  <div class="jumbotron">
    <h1 class="display-4">Gestion de Casos</h1>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr class="my-4" />
    <v-row>
      <v-col cols="6" md="6">
        <a
          class="btn btn-danger btn-lg float-end"
          href="/ui/menudenunciaec"
          role="button"
          >Denuncias</a
        >
      </v-col>

      <v-col cols="6" md="6">
        <a class="btn btn-success btn-lg" href="/ui/consultasrecibidas" role="button"
          >Consultas y Sugerencias</a
        >
      </v-col>
    </v-row>
  </div>
</template>

