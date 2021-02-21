<template>
  <div>
    <p>Auth Token</p>
    <p>{{ auth.access_token }}</p>
    <p>Expires in</p>
    <p>{{ auth.expires_in }} seconds</p>
    <button @click="fetchTenGames()">Fetch 10 Games</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    fetchIGDBAuth() {
      this.$store.dispatch(`auth/fetchIgdbAuthToken`).catch((err) => {
        console.log(err)
      })
    },
    fetchTenGames() {
      debugger
      this.$store.dispatch(
        `search/fetchTenGames`,
        this.auth.token_type + ` ` + this.auth.access_token
      )
    },
  },
  computed: {
    ...mapGetters({
      auth: `auth/getIgdbAuth`,
      results: `search/getSearchResults`,
    }),
  },
  mounted() {
    this.fetchIGDBAuth()
  },
}
</script>

<style></style>
