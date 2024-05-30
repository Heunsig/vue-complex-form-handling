<script setup lang="ts">
import GithubSvg from '@/assets/github-mark.svg'
</script>
<template>
  <div>
    <div class="nav">
      <router-link to="/basic" class="link"> Basic Style </router-link>
      <router-link to="/provide-inject" class="link"> Provide Inject Style </router-link>
      <router-link to="/define-expose" class="link"> Define Expose Style </router-link>
      <router-link to="/store" class="link"> Store Style </router-link>
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
  background-color: #f8f5f2;
  border-bottom: 1px solid #232323;
}

.divider {
  flex: 1;
}

.link:link,
.link:visited {
  padding: 0.25rem 0.5rem;
  color: #222525;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.link.router-link-active {
  font-weight: 600;
  color: #fffffe;
  background-color: #078080;
  border-radius: 3px;
}
</style>
