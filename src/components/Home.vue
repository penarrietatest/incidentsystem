<template>
  <div class="home">
    <v-main class="pt-0 pt-sm-12 pt-md-15">
      <Header class="computer d-none d-sm-flex" />

      <HeaderMovile class="movile d-sm-none" />

      <v-row
        no-gutters
        class="my-md-12 mx-2 mx-sm-4 mx-md-16 mt-5 mb-14 text-center"
      >
        <v-col>
          <v-card>
            <v-card-title>
              Clients
              <v-spacer></v-spacer>
              <v-btn x-small fab outlined @click="dialog = !dialog">
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="clients"
              :search="search"
              disable-sort
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>

      <!-- modal add client -->
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600">
          <v-form >
        <v-card>
          <v-text-field solo label="Problem" required v-model="addIncidence.problem"></v-text-field>
          <v-text-field solo label="Problem" required v-model="addIncidence.problem"></v-text-field>
          <v-text-field solo label="Problem" required v-model="addIncidence.problem"></v-text-field>
          <v-text-field solo label="Problem" required v-model="addIncidence.problem"></v-text-field>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-form>
        </v-dialog>
      </v-row>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import HeaderMovile from "@/components/HeaderMovile.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Header,
    HeaderMovile,
  },
  data: () => ({
    search: "",
    headers: [
      {
        text: "Names",
        align: "start",
        sortable: false,
        divider: true,
        value: "name",
      },
      { text: "CI", value: "ci" },
      { text: "Contact", value: "contact" },
      { text: "Latitude", value: "coordinates.ff" },
      { text: "Longitude", value: "coordinates.df" },
      { text: "Zona", value: "olt" },
    ],
    dialog: false,
  }),
  computed: {
    ...mapState(["clients"]),
  },
};
</script>

<style lang="scss" scoped>
.imgBack {
  background-color: rgba(44, 62, 80, 0.92);
  opacity: 0.7;
  height: 12px;
  flex-wrap: nowrap;
  color: white;
  z-index: 3;
}
.txtCard {
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
}
</style>