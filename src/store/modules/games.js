import { getGamesList } from "@/services/rawg-service";

const games = {
  state: () => ({
    gamesList: [],
    loading: false,
    gamesParams: {
      page_size: 15,
      ordering: "-rating",
      search: "",
      parent_platforms: "",
    },
  }),
  mutations: {
    setGamesList(state, gamesList) {
      state.gamesList = gamesList;
    },
    setGamesParams(state, gamesParams) {
      state.gamesParams = gamesParams;
    },
    setLoaderState(state, loaderState) {
      state.loading = loaderState;
    },
  },
  actions: {
    fetchGames({ commit }, params) {
      commit("setLoaderState", true);
      getGamesList(params)
        .then((data) => {
          commit("setGamesList", data);
        })
        .then(() => commit("setLoaderState", false));
    },
    mutateGamesParams({ commit }, params) {
      commit("setGamesParams", params);
    },
  },
  getters: {
    getGamesList: (state) => state.gamesList,
    getLoaderState: (state) => state.loading,
    getGamesParams: (state) => state.gamesParams,
  },
};

export default games;
