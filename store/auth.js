// 1. Check auth cookie
// - If nothing, fetch auth token
// - If

export const state = () => ({
  igdbAuth: { access_token: null, expires_in: null, token_type: null },
})

export const getters = {
  getIgdbAuth: (state) => state.igdbAuth,
}

export const actions = {
  async fetchIgdbAuthToken({ commit }) {
    const params = {
      client_id: process.env.igdbClientId,
      client_secret: process.env.igdbClientSecret,
      grant_type: `client_credentials`,
    }
    const queryUrl = `https://id.twitch.tv/oauth2/token?client_id=${params.client_id}&client_secret=${params.client_secret}&grant_type=client_credentials`
    await this.$axios
      .$post(queryUrl)
      .then((response) => {
        commit(`setIgdbAuth`, response)
      })
      .catch((err) => {
        console.error(err)
      })
  },
}

export const mutations = {
  setIgdbAuth(state, newAuth) {
    state.igdbAuth = newAuth
  },
}
