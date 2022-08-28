import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//moment
Vue.use(require('vue-moment'));

//Firebase
Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkL6EQtfvmLcAy5DkAhyZtoa55Zh45a6g",
  authDomain: "incidentsystemptinet.firebaseapp.com",
  projectId: "incidentsystemptinet",
  storageBucket: "incidentsystemptinet.appspot.com",
  messagingSenderId: "617497855426",
  appId: "1:617497855426:web:af3eac65c36910ad1a025b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export var db = firebase.firestore()


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    store.dispatch('detectUser', {email: user.email, uid: user.uid})
  } else {
    // User is signed out.
    store.dispatch('detectUser', null)
  }

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
});
