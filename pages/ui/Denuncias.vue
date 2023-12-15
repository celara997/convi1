
<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/index.esm.js";
import { ref } from "vue";
import UiParentCard from "@/components/shared/UiParentCard.vue";
const checkbox = ref(false);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
const checkbox5 = ref(false);
const checkbox6 = ref(false);
const checkbox7 = ref(false);
const checkbox8 = ref(false);
const checkbox9 = ref(false);
const checkbox10 = ref(false);
const checkbox11 = ref(false);
const checkbox12 = ref(false);
const checkbox13 = ref(false);
</script>


<template>
  <div class="jumbotron">
    <h1 class="display-4">Registrar denuncia</h1>
    <p class="lead">
      Completa la siguiente información sobre el hecho que quieres denunciar.
    </p>
    <hr class="my-4" />

    <v-row>
      <v-col cols="12" md="12">
        <v-row>
          <v-col cols="12" md="4">
            <UiParentCard title="¿Quiénes participaron?               ">
              <div class="pa-7 pt-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Alumnos
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Docentes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Otros funcionarios
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Apoderados
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Otras personas
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    No lo tengo claro
                  </label>
                </div>
              </div>
            </UiParentCard>
          </v-col>
          <v-col cols="12" md="4">
            <UiParentCard title="¿Dónde ocurrió?">
              <div class="pa-7 pt-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    En el colegio
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Fuera del colegio
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    En las redes sociales
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    En otro lugar
                  </label>
                </div>
              </div>
            </UiParentCard>
          </v-col>
          <v-col cols="12" md="4">
            <UiParentCard title="¿Cuándo ocurrió?">
              <div class="pa-7 pt-1">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    En una fecha determinada
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Se viene produciendo en reiteradas ocaciones
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    No lo tengo claro
                  </label>
                </div>
              </div>
            </UiParentCard>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <UiParentCard
              title="Relatar los hechos en el siguiente recuadro (se solicita la mayor cantidad de precisión y detalles posibles)."
            >
              <div class="pa-7 pt-1" style="height: 100%">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
            </UiParentCard>
          </v-col>
          <v-col cols="12" md="6">
            <UiParentCard
              title="¿Se tomaron medidas inmediatas frente a los hechos ocurridos para proteger la integridad de los involucrados? Relatar."
            >
              <div class="pa-7 pt-1" style="height: 100%">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
            </UiParentCard>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <p class="lead" style="color: black">
          A continuación podrás enviar tu denuncia a un profesor determinado o
          al Encargado de Convivencia
        </p>
        <p class="lead">
          <select class="form-select" aria-label="Default select example">
            <option selected>Seleccione destinatario..</option>
            <option value="1">Sebastian Ibarra - Profesor</option>
            <option value="2">
              Alvaro Lavin - Encargado de Convivencia Escolar
            </option>
            <option value="3">Cesar Lara - Profesor</option>
          </select>
        </p>
      </v-col>
    </v-row>

    <!-- Button trigger modal -->
    <v-row>
      <v-col cols="12" md="7">
        <button
          type="button"
          class="btn btn-success btn-lg float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Registrar Denuncia
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
            Gracias, tu denuncia ha sido enviada exitosamente!
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

