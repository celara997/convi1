
<script setup lang="ts">
import { ref } from 'vue';
import "bootstrap/dist/css/bootstrap.css";
</script>


<template>
    <div class="jumbotron">
    <h1 class="display-4">Repositorio de Documentos</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
     <v-col cols="12" md="12">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Categoria</th>
            <th scope="col">Fecha y Hora</th>
            <th scope="col">Formato</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Normativa del Colegio</td>
            <td>07-ago-23 15:45</td>
            <td>.pdf</td>
            <td>
              <a class="btn btn-success btn-xs" href="#" role="button">Ver</a>
            </td>
          </tr>
         <tr>
            <th scope="row">2</th>
            <td>Acreditación</td>
            <td>07-ago-23 15:45</td>
            <td>.doc</td>
            <td>
              <a class="btn btn-success btn-xs" href="#" role="button">Ver</a>
            </td>
          </tr><tr>
            <th scope="row">3</th>
            <td>Antecedentes Alumno</td>
            <td>07-ago-23 15:45</td>
            <td>.pdf</td>
            <td>
              <a class="btn btn-success btn-xs" href="#" role="button">Ver</a>
            </td>
          </tr><tr>
            <th scope="row">4</th>
            <td>Planilla 8vo Básico</td>
            <td>07-ago-23 15:45</td>
            <td>.xls</td>
            <td>
              <a class="btn btn-success btn-xs" href="#" role="button">Ver</a>
            </td>
          </tr>
        </tbody>
      </table>
    </v-col>
    </div>
</template>

