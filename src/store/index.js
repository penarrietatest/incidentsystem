import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'
import { db } from "@/main";
import firebase from 'firebase/app'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //config website
    configuration: {},

    //auth firebase
    user: null,
    error: null,

    //store
    clients: [],
    incidents: {},

  },
  getters: {

  },
  mutations: {
    //configuration website
    setConfiguration(state, payload) {
      state.configuration = payload;
    },

    //auth firebase 
    setUser(state, payload) {
      state.user = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    getClients(state, payload) {
      state.clients = payload;
    },
    getIncidents(state, payload) {
      state.incidents = payload;
    },
    setIcindence(state, payload) {
      state.incidents.push(payload);
    }

  },
  actions: {
    async getConfiguration({ commit }) {
      try {
        let config;
        const response = await db.collection("configuration").get();
        response.forEach((doc) => {
          config = {
            id: doc.id,
            title: doc.data().title,
            currency: doc.data().currency,
            whatsapp: doc.data().whatsapp,
          };
        });
        commit("setConfiguration", config);
      } catch (error) {
        error;
      }
    },

    async loginUser({ commit }, item) {
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(item.email, item.password)
        commit('setUser', { email: response.user.email, uid: response.user.uid })
        router.push({ name: 'home' })
      } catch (error) {
        commit('setError', error.message)
      }
    },
    detectUser({ commit }, payload) {
      if (payload !== null) {
        commit('setUser', { email: payload.email, uid: payload.uid })
      } else {
        commit('setUser', null)
      }
    },
    async closeSession({ commit }) {
      await firebase.auth().signOut()
      commit('setUser', null)
      router.push({ name: 'login' })
    },
    async getClients({ commit }) {
      try {
        let customer = [];
        const response = await db.collection("clients").get();
        response.forEach((doc) => {
          let customerData = doc.data();
          customerData.id = doc.id;
          customer.push(customerData);
        });
        commit("getClients", customer);
      } catch (error) {
        error;
      }
    },
    async getIncidents({ commit }) {
      try {
        let inc = [];
        const response = await db.collection("incidents").orderBy('date', 'asc').get();
        response.forEach((doc) => {
          let incData = doc.data();
          incData.id = doc.id;
          inc.push(incData);
        });
        commit("getIncidents", inc)
      } catch (error) {
        error;
      }
    },
    async postIcindence({ commit }, item) {
      try {
        const response = await db.collection("incidents").add({
          customer: item.customer,
          date: item.date,
          problem: item.problem,
          solution: item.solution
        });
        item.id = response.id;
        commit("setIcindence", item);
      } catch (error) {
        error;
      }
    },

  },
  modules: {},
});
