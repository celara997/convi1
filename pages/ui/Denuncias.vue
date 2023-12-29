
<script setup lang="ts">
interface encargadoI {
  nombre :String
  cargo: String
  _id: String
}
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/index.esm.js";
import { ref } from "vue";
import UiParentCard from "@/components/shared/UiParentCard.vue";
import axios from "axios"

const participantesList= ref([
  "Alumnos",
  "Docentes",
  "Otros funcionarios",
  "Apoderados",
  "Otras personas",
  "No lo tengo claro"
]);
const dondeList = ref([
  "En el colegio",
  "Fuera del colegio",
  "En las redes sociales",
  "En otro lugar"
]);

const cuandoList = ref([
  "En una fecha determinada",
  "Se viene produciendo en reiteradas ocaciones",
  "No lo tengo claro"
])
const encargados = ref<encargadoI[]>([]);
const participantesValue = ref([]);
const dondeValue= ref('');
const cuandoValue = ref('');
const form = ref({
  participantes: [],
  donde: '',
  cuando: '',
  relato: '',
  medidas: '',
  encargado: '0'
})
onMounted( async () => {
  const encargadoApi = await axios.get('/api/encargado');
  encargadoApi.data.forEach((element:encargadoI) => {
    encargados.value.push({...element})
  });
})
const submit = () => {
  axios.post('/api/denuncia',form.value);
}
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
            <UiParentCard title="¿Quiénes participaron?">
              <div class="pa-7 pt-1">
                <OwnSelect type="multiple" v-model="form.participantes" :list="participantesList"></OwnSelect>
              </div>
            </UiParentCard>
          </v-col>
          <v-col cols="12" md="4">
            <UiParentCard title="¿Dónde ocurrió?">
              <div class="pa-7 pt-1">
                <OwnOption v-model="form.donde" :list="dondeList"></OwnOption>
              </div>
            </UiParentCard>
          </v-col>
          <v-col cols="12" md="4">
            <UiParentCard title="¿Cuándo ocurrió?">
              <div class="pa-7 pt-1">
                <OwnOption v-model="form.cuando" :list="cuandoList"></OwnOption>
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
                  v-model="form.relato"
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
                  v-model="form.medidas"
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
          <select v-model="form.encargado" class="form-select" aria-label="Default select example">
            <option value="0"> Seleccione destinatario...</option>
            <option :value="encargado._id"  v-for="(encargado, index)  in encargados"> 
            {{ encargado.nombre }} - {{ encargado.cargo }}
            </option>
          </select>
        </p>
      </v-col>
    </v-row>

    <!-- Button trigger modal -->
    <v-row>
      <v-col cols="12" md="7">
        <button
        @click="submit"
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

