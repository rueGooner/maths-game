const initialState = {
  results: [],
  firstNumber: null,
  secondNumber: null,
};

const getters = {
  getFirstNumber: state => state.firstNumber,
  getSecondNumber: state => state.secondNumber,
};

const actions = {
  generateNewSum({ commit }, { min, max }) {
    const first = Math.floor(Math.random() * max + min);
    const second = Math.floor(Math.random() * max + min);

    commit('firstNumber', first);
    commit('secondNumber', second);
  },
};

const mutations = {
  firstNumber(state, payload) {
    state.firstNumber = payload;
  },

  secondNumber(state, payload) {
    state.secondNumber = payload;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
