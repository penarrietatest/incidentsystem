<template>
  <div class="404">
    <Header class="computer d-none d-md-flex" />

    <HeaderMovile class="movile d-md-none" />

    <v-row no-gutters class="my-md-16 pt-md-5 mx-md-16 my-8 text-center">
      <v-col>
        <h3>Error 404</h3>
      </v-col>
    </v-row>


  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import HeaderMovile from "@/components/HeaderMovile.vue";
  export default {
    name: 'Error',
    components: {
    Header,
    HeaderMovile
  },
    data: () => ({
      
    }),
  }
</script>
