<template>
  <section class="container-fluid">
    <div class="row">
      <div v-for="(land, index) in landen" :key="index" class="col-lg-4">
        <div class="card text-center mx-auto my-5" style="width: 18rem;">
          <img :src="landen.flags.png" class="card-img-top" :alt="landen.name.common">
          <div class="card-body">
            <h5 class="card-title">{{ landen.name.common }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import servicesLanden from "../services/servicesLanden";
export default {
  name: "landen",
  data(){
    return{
      landen: null,
    }
  },
  created() {
    servicesLanden.getLanden().then(response =>{this.landen = response.data[0]}).catch(error =>{console.log(error)})
  },
};

</script>

