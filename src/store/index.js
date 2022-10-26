import { createStore } from "vuex";
import games from "@/store/modules/games";

export default createStore({
  state: () => {
    return {
      loading: true,
    };
  },
  modules: {
    games,
  },
});
