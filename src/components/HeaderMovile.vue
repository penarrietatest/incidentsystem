<template>
  <div class="header-movile">
    <v-bottom-navigation grow fixed>
      <v-btn @click="home()">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn @click="incidence()">
        <span>Incidence</span>
        <v-icon>mdi-help-network</v-icon>
      </v-btn>

      <v-btn>
        <span>Retreat</span>
        <v-icon>mdi-close-network</v-icon>
      </v-btn>

      <v-btn>
        <span>Installation</span>
        <v-icon>mdi-plus-network</v-icon>
      </v-btn>

    </v-bottom-navigation>

    
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HeaderMovile",
  data: () => ({
    url: window.location.pathname,
  }),
  computed: {},
  methods: {
    ...mapActions(["closeSession"]),
    home() {
      this.$router.push('/home')
    },
    incidence() {
      this.$router.push('/incidence')
    }
  },
};
</script>
<style lang="scss" scoped>
.drawer {
  height: 100vh;
}
.v-item-group.v-bottom-navigation .v-btn {
  max-width: 100%;
}

</style>
