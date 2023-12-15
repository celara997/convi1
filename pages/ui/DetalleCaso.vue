<script setup lang="ts">
import { ref } from "vue";
import "bootstrap/dist/css/bootstrap.css";
</script>
<template>
  <div class="jumbotron">
    <h1 class="display-4">caso #246</h1>
    <p class="lead">Resumen</p>
    <hr class="my-4" />
    <v-row>
      <v-col cols="6" md="6">
        <form>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >N° de caso</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="246"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Denunciante</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="Juan Pérez Pérez"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Categoria</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="Apoderado"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Teléfono</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="(+569) 51143921"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Correo</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Domicilio</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="Las Torres 123, Maipu"
              />
            </div>
          </div>
        </form>
      </v-col>
      <v-col cols="6" md="6">
        <form>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Fecha</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Hora</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Participantes</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Lugar</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-3 col-form-label"
              >Cuando Ocurrio</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                readonly
                class="form-control-plaintext"
                id="staticEmail"
                value="email@example.com"
              />
            </div>
          </div>
        </form>
      </v-col>
      <v-col cols="12" md="12">
        <div class="form-group row">
          <label for="staticEmail" class="col-sm-2 col-form-label"
            >Relato de los hechos:</label
          >
          <div class="col-sm-9">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
              placeholder="Su consulta o sugerencia será recepcionada por el Equipo de Convivencia Escolar del establecimiento y será respondida a la brevedad por esta misma aplicación. Podrá ver la respuesta en la sección “Mis Casos”."
            ></textarea>
          </div>
        </div>
      </v-col>
    </v-row>
    <hr class="my-4" />
    <v-col cols="6" md="6">
      <div class="pa-7 pt-1" style="height: 100%">
        <p class="lead" style="color: black">
          A continuación podrás seleccionar una categoria para esta denuncia:
        </p>
        <p class="lead">
          <select class="form-select" aria-label="Default select example">
            <option selected>Seleccione Categoria..</option>
            <option value="1">Aula Segura</option>
            <option value="2">Prácticas abusivas sexuales</option>
            <option value="3">Maltrato físico y psicológico entre pares</option>
            <option value="4">Embarazo y paternidad adolescente</option>
            <option value="5">Vulneración de derechos</option>
            <option value="6">Consumo de drogas y alcohol</option>
            <option value="7">Tendencia o actos suicidas</option>
            <option value="8">Bullying</option>
            <option value="9">Otros</option>
          </select>
        </p>
      </div>
    </v-col>
    <v-row>
      <v-col cols="12" md="7">
        <button
          type="button"
          class="btn btn-success btn-lg float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          GESTIONAR
        </button>
      </v-col>
    </v-row>
  </div>
</template>

