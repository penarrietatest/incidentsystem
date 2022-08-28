<template>
  <div class="incidence">
    <v-main class="pt-0 pt-sm-5 pt-md-15">
      <HeaderMovile class="movile d-sm-none" />

      <v-row no-gutters class="my-md-12 mx-md-16 my-5 text-center">
        <v-col>
          <v-card class="mx-2">
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-btn icon @click="home()">
                <v-icon>mdi-keyboard-backspace</v-icon>
              </v-btn>

              <v-toolbar-title class="text-h6 pl-0">
                Incidence
              </v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn class="mt-5" fab dark color="teal" @click="modal = !modal">
                <v-icon large> mdi-plus </v-icon>
              </v-btn>
            </v-app-bar>

            <v-card-text>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Olt</th>
                      <th>Customer</th>
                      <th>Problem</th>
                      <th>Solution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i, index) in incidents" :key="index.incidents">
                      <td class="text-left">
                        {{
                          new Date(i.date.seconds * 1000)
                            | moment("DD/MM/YY, H:mm")
                        }}
                      </td>
                      <td class="text-left">
                        {{ getCustomer(i.customer).olt }}
                      </td>
                      <td class="text-left">
                        {{ getCustomer(i.customer).name }}
                      </td>
                      <td class="text-left">{{ i.problem }}</td>
                      <td class="text-left">{{ i.solution }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text> </v-card-text>

            <v-card-actions>
              <v-btn class="ma-2" color="green" dark>
                {{ incidents.length }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-dialog v-model="modal" persistent max-width="600">
          <v-form @submit.prevent="postIcindence(addIncidence)">
            <v-card>
              <v-card-title>
                <span>New incidence</span>
              </v-card-title>
              <v-card-text>
                <v-select
                solo
                  :items="clients"
                  :item-text="'name'"
                  :item-value="'id'"
                  label="Customer"
                  required
                  v-model="addIncidence.customer"
                ></v-select>
                <v-text-field solo label="Problem" required v-model="addIncidence.problem"></v-text-field>
                <v-textarea solo label="Solution" required v-model="addIncidence.solution"></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click.stop="modal = !modal">Exit</v-btn>
                <v-btn type="submit" @click.stop="modal = !modal">Add</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-dialog>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import HeaderMovile from "@/components/HeaderMovile.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Incidence",
  components: {
    HeaderMovile,
  },
  data: () => ({
    modal: false,
    selected: {},
    addIncidence: {
      customer: "",
      date: new Date(),
      problem: "",
      solution: ""
    }

  }),

  computed: {
    ...mapState(["incidents", "clients"]),
  },
  methods: {
    ...mapActions(["postIcindence", "getIncidents"]),
    home() {
      this.$router.push("/home");
    },
    getCustomer(id) {
      return this.clients.find((item) => item.id == id);
    },
  },
  created() {
    this.getIncidents();
  },
};
</script>
