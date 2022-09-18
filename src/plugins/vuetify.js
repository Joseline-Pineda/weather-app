import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#1E213A",
        secondary: "#100E1D",
        snackSuccess: "#388E3C",
        snackWarning: "#FF6F00",
        snackError: "#B71C1C",
        snackInfo: "#0D47A1",
      },
      dark: {},
    },
    options: {
      customProperties: true,
    },
  },
});
