
<script>
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
// Make BootstrapVue available throughout your project
</script>


<template>
  <div class="jumbotron" >
    <v-row>
      
        <h1 class="display-4">Bienvenido Sebastián!</h1>
        <v-col cols="12"  md="9">
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
     </v-col>
     <v-col cols="12" md="3">
        <img
          class="rounded-circle float-end"
          src="/images/background/niños.png"
          width="80%"
          alt=""
        />
     </v-col>  
     </v-row>
    

    <hr class="my-4" />
    <p>
      Nosotros estamos para ayudarte, ingresar una Constancia o Registro es muy
      facil.
    </p>
    <p class="lead">
      <a class="btn btn-success btn-lg" href="/ui/teescuchamos" role="button"
        >Te escuchamos!!</a
      >
    </p>
  </div>
  
</template>

