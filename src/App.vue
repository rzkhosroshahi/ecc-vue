<template>
  <div>
    <ul>
      <li>
        <router-link :to="{name: 'ecc-servers'}">servers</router-link>
      </li>
      <li>
        <router-link :to="{name: 'ecc-stats'}">stats</router-link>
      </li>
    </ul>
    <router-view />
    <slot />
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    addEventListener('changeRoute', this.handleNavigateFromHost);
  },
  beforeDestroy() {
    removeEventListener('changeRoute', this.handleNavigateFromHost);
  },
  methods: {
    handleNavigateFromHost(to) {
      this.$router.push(to.detail.path);
    },
  }
};
</script>
