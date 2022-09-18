<template>
  <v-app>
    <div id="app">
      <v-app id="inspire">
        <v-navigation-drawer
          id="sidebar"
          class="primary"
          dark
          permanent
          width="500"
          fixed
          src="@/assets/img/Cloud-background.png"
        >
          <v-list>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-app>
    </div>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
#sidebar {
  padding-top: 50px !important;
}
.v-navigation-drawer__image {
  position: initial !important;
  filter: grayscale(200%) opacity(0.1) drop-shadow(0 0 0 black) !important;
}

.theme--light.v-application {
  background: #100e1d !important;
  color: rgba(0, 0, 0, 0.87);
}
</style>
