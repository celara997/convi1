<script setup lang="ts">
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";
</script>
<template>
  <div class="jumbotron">
    <h1 class="display-4">Mis Casos</h1>
    <p class="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr class="my-4" />
    <v-col cols="12" md="12">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Denunciante</th>
            <th scope="col">Categoria</th>
            <th scope="col">Fecha y Hora</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Juan Pérez Pérez</td>
            <td>Apoderado</td>
            <td>07-ago-23 15:45</td>
            <td>
              <a class="btn btn-success btn-xs" href="#" role="button">Ver</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Juan Pérez Pérez</td>
            <td>Apoderado</td>
            <td>07-ago-23 15:45</td>
            <td>
              <a class="btn btn-success btn-xs" href="#" role="button">Ver</a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Juan Pérez Pérez</td>
            <td>Apoderado</td>
            <td>07-ago-23 15:46</td>
            <td>
              <a class="btn btn-success btn-xs" href="/ui/detallecaso" role="button">Ver</a>
            </td>
          </tr>
        </tbody>
      </table>
    </v-col>
  </div>
</template>

