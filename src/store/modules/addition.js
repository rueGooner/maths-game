const initialState = {
  results: [],
};

const getters = {};
const actions = {
  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * max + min);
  },
};
const mutations = {};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
