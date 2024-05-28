<template>
  <div>
    <div class="nav">
      <router-link to="/basic" class="link"> Basic Style </router-link>
      <router-link to="/define-expose" class="link"> Define Expose Style </router-link>
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

.link.router-link-active {
  font-weight: bold;
  color: black;
}
</style>
