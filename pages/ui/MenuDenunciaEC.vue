<script setup lang="ts">
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";
</script>
<template>
  <div class="jumbotron">
    <h1 class="display-4">Menu de Denuncias</h1>
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
    <v-col cols="12" md="12" >
       <a class="btn btn-success btn-lg float" href="/ui/casosrecibidos" role="button"
        >Denuncias Nuevas Recibidas</a
      >
    </v-col>

     <v-col cols="12" md="12" >
       <a class="btn btn-primary btn-lg " href="/ui/denunciastramite" role="button"
        >Denuncia en Trámite</a
      >
     </v-col>

      <v-col cols="12" md="12" >
       <a class="btn btn-warning btn-lg " href="/ui/denunciasterminadas" role="button"
        >Denuncias Terminadas</a
      >
      </v-col>
      <v-col cols="12" md="12" >
       <a class="btn btn-info btn-lg " href="/ui/denunciasterminadas" role="button"
        >Estadísticas</a
      >
      </v-col>
       </v-row>
  
  </div>
</template>

