<script setup lang="ts">
import GithubSvg from '@/assets/github-mark.svg'
</script>
<template>
  <div>
    <div class="nav">
      <router-link to="/basic" class="link"> Basic Style </router-link>
      <router-link to="/define-expose" class="link"> Define Expose Style </router-link>
      <div class="divider"></div>
      <a
        href="https://github.com/Heunsig/vue-complex-form-handling"
        title="Heunsig/vue-complex-form-handling"
      >
        <img :src="GithubSvg" alt="Github icon" style="width: 1.5rem" />
      </a>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.nav {
  height: 3rem;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #d9d9d9;
}

.divider {
  flex: 1;
}

.link.router-link-active {
  font-weight: bold;
  color: black;
}
</style>
