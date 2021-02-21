export const state = () => ({
  searchResults: [],
})

export const getters = {
  getSearchResults: (state) => state.searchResults,
}

export const actions = {
  async fetchTenGames({ commit, authorization }) {
    const queryUrl = `https://api.igdb.com/v4/games/`
    await this.$axios
      .$post(queryUrl, {
        headers: {
          Client_ID: process.env.igdbClientId,
          Authorization: authorization,
        },
        body: `fields name; limit 10;`,
      })
      .then((response) => {
        commit(`setSearchResults`, response)
      })
      .catch((err) => {
        console.error(err)
      })
  },
}

export const mutations = {
  setSearchResults(state, results) {
    state.searchResults = results
  },
}
