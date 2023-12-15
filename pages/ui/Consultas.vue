
<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/index.esm.js";
import { ref } from "vue";
</script>


<template>
  <div class="jumbotron">
    <h1 class="display-4">Consultas y Sugerencias</h1>
    <p class="lead">
      Realice en el siguiente recuadro su consulta o sugerencia.
    </p>
    Importante:
    <p class="lead">
      Su consulta o sugerencia será recepcionada por el Equipo de Convivencia
      Escolar del establecimiento y será respondida a la brevedad por esta misma
      aplicación. Podrá ver la respuesta en la sección “Mis Casos”.
    </p>
    <hr class="my-4" />
    <v-row>
      <v-col cols="12" md="12">
        <div class="pa-7 pt-1" style="height: 100%">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            placeholder="Escriba aquí"
          ></textarea>
        </div>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="12" md="7">
        <button
          type="button"
          class="btn btn-success btn-lg float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Enviar
        </button>
      </v-col>
    </v-row>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Enviado</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body alert alert-success">
            Gracias, tu consulta o sugerencia ha sido enviada exitosamente!
          </div>
          <div class="modal-footer">
            <a
              type="button"
              class="btn btn-success"
              data-bs-dismiss="modal"
              to="/ui/casos"
              >Continuar</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>