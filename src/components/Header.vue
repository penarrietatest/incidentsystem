<template>
  <div class="header">
    <v-navigation-drawer
      v-model="drawermenu"
      :mini-variant="miniVariantmenu"
      :clipped="clippedmenu"
      app
      fixed
      expand-on-hover
    >
      <div class="d-flex flex-column drawermenu">
        <div class="mb-auto">
          <v-row justify="center" class="pt-8">
            <v-col align="center">
              <v-avatar class="profile" size="50">
                <v-img
                  v-if="$vuetify.theme.dark"
                  src="@/assets/logodark.png"
                ></v-img>
                <v-img v-else src="@/assets/logowhite.png"></v-img>
              </v-avatar>
            </v-col>
          </v-row>

          <v-list>
            <v-list-item
              v-for="(item, i) in lists"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

        <div class="mt-auto text-center">
          <v-btn icon v-on:click="toggle_dark_mode">
            <v-icon>mdi-theme-light-dark</v-icon>
          </v-btn>
        </div>
      </div>
    </v-navigation-drawer>

  

    <v-app-bar :clipped-left="clippedmenu" fixed app>
      <v-app-bar-nav-icon @click.stop="drawermenu = !drawermenu" />
      <!-- <v-btn @click.stop="miniVariant = !miniVariant" icon>
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-btn @click.stop="clipped = !clipped" icon>
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="configuration.title" />
      <v-spacer />

      <v-spacer />

      <v-btn icon @click="closeSession()">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Header",
  data: () => ({
    url: window.location.pathname,
    drawer: false,
    drawermenu: true,
    clipped: true,
    clippedmenu: true,
    miniVariant: false,
    miniVariantmenu: true,
    lists: [
      {
        icon: "mdi-apps",
        title: "Home",
        to: "/",
      },
      {
        icon: "mdi-help-network",
        title: "Incidence",
        to: "/incidence",
      },
      {
        icon: "mdi-close-network",
        title: "Retreat",
        to: "/retreat",
      },
      {
        icon: "mdi-plus-network",
        title: "Installation",
        to: "/installation",
      }
    ]

  }),
  computed: {
    ...mapState(["configuration"]),
  },
  methods: {
    ...mapActions(["closeSession"]),
    toggle_dark_mode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }

  },
};
</script>
<style lang="scss" scoped>
.drawer {
  height: 95vh;
}
.drawermenu {
  height: 84vh;
}

</style>
