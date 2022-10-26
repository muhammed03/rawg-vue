import { getGamesList } from "@/services/rawg-service";

const games = {
  state: () => ({
    gamesList: [],
    loading: false,
  }),
  mutations: {
    setGamesList(state, gamesList) {
      state.gamesList = gamesList;
    },
  },
  actions: {
    fetchGames({ commit }, params) {
      getGamesList(params).then((data) => {
        commit("setGamesList", data);
      });
    },
  },
  getters: {
    getGamesList: (state) => state.gamesList,
    getLoaderState: (state) => state.loading,
  },
};

export default games;
