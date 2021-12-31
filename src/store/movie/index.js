import axios from "@axios";

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getAll(ctx, queryParams) {
      return new Promise((resolve, reject) => {
        axios
          .get("/movie", { params: queryParams })
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      });
    },
  },
};
