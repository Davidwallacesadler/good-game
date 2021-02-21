<template>
  <div>
    <p>Auth Token</p>
    <p>{{ auth.access_token }}</p>
    <p>Expires in</p>
    <p>{{ auth.expires_in }} seconds</p>
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
  },
  computed: {
    ...mapGetters({
      auth: `auth/getIgdbAuth`,
    }),
  },
  mounted() {
    this.fetchIGDBAuth()
  },
}
</script>

<style></style>
