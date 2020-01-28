import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';
import addition from './modules/addition';

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage,
  reducer: state => ({
    state: state.addition,
  }),
});

const store = new Vuex.Store({
  modules: {
    addition,
  },
  plugins: [vuexLocalStorage.plugin],
});

export default store;
