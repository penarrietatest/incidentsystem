<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["getConfiguration", "getIncidents", "getClients"])
  },
  created() {
    this.getConfiguration()
    this.getIncidents()
    this.getClients()
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
};
</script>
<style lang="scss">
  a {
    text-decoration: none;
  }
</style>
