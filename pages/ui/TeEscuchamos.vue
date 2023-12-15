<script setup lang="ts">
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";
</script>
<template>
  <div class="jumbotron">
    <h1 class="display-4">Te Escuchamos!!</h1>
    <p class="lead">
          Con la Aplicación CONVI puedes comunicarte con el colegio de manera
          segura y confidencial.
        </p>
     <p class="lead">
          Acá podrás realizar una denuncia sobre algún hecho que afecte la
          convivencia escolar y también puedes formular consultas o sugerencias
          sobre temáticas relativas a la convivencia escolar, las que serán
          atendidas por el equipo encargado del área.
        </p>
    <hr class="my-4" /> 
    <v-row>
    <v-col cols="6" md="6" >
       <a class="btn btn-danger btn-lg float-end" href="/ui/denuncias" role="button"
        >Realizar una Denuncia</a
      >
    </v-col>

     <v-col cols="6" md="6" >
       <a class="btn btn-success btn-lg " href="/ui/consultas" role="button"
        >Realizar una Consulta y Sugerencia</a
      >
     </v-col>
       </v-row>
  
  </div>
</template>

