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
  },
  actions: {
    fetchGames({ commit }, params) {
      getGamesList(params).then((data) => {
        commit("setGamesList", data);
      });
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
