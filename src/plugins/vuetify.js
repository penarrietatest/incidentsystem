import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        options: {
            customProperties: true,
        },
        themes: {
            light: {
              primary: '#004d61',
              secondary: '#348498',
              accent: '#da4302',
              error: '#dc3545',
              info: '#5bd1d7',
              success: '#4caf50',
              warning: '#ffc107'
            },
            dark: {
              primary: '#207561',
              secondary: '#589167',
              accent: '#da4302',
              error: '#dc3545',
              info: '#a0cc78',
              success: '#4caf50',
              warning: '#ffc107'
            }
        },
    },
});