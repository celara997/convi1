
<script setup lang="ts">
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";
</script>


<template>
  <div class="jumbotron">
    <h1 class="display-4">Derivar</h1>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr class="my-4" />
    <div cols="6" md="6">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Primera Denuncia: </span>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Derivada: </span>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Nombre Estudiante: </span>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Curso: </span>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Profesor Jefe: </span>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Fecha: </span>
        <input
          type="text"
          class="form-control"
          placeholder=""
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
    <p class="lead">
      <a class="btn btn-primary btn-lg float-end" href="#" role="button"
        >Enviar</a
      >
    </p>
  </div>
</template>