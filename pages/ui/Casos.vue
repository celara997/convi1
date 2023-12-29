<script setup lang="ts">
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
const denuncias= ref([]);
onMounted( async () => {
  const Api = await axios.get('/api/denuncia');
  Api.data.forEach((element) => {
    denuncias.value.push(element)
  });
})

const formatDate = (fechaInput: string) => {
  let fecha = new Date(fechaInput);

// Obtiene el día, mes y año
let dia = fecha.getDate();
let mes = fecha.toLocaleString('es-ES', { month: 'short' });
let anio = fecha.getFullYear().toString().substr(-2);

// Obtiene la hora y los minutos
let hora = fecha.getHours();
let minutos = fecha.getMinutes();

// Formatea la fecha en el formato deseado
let fechaFormateada = `${dia}-${mes}-${anio} ${hora}:${minutos}`;
return fechaFormateada
}
</script>
<template>
  <div class="jumbotron">
    <h1 class="display-4">Mis Casos</h1>
    <p class="lead">
          
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
          <tr v-for="(denuncia, index)  in denuncias">
            <th scope="row"> {{ index+1 }}</th>
            <td> {{ denuncia.encargado.nombre }}</td>
            <td> Apoderado</td>
            <td> {{ formatDate(denuncia.created_date) }}</td>
            <td>
              <a class="btn btn-success btn-xs" href="/ui/detallecaso" role="button">Ver</a>
            </td>
          </tr>
        </tbody>
      </table>
    </v-col>
  </div>
</template>

