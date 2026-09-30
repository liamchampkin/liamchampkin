<template>
  <header>
    <div class="header-inner content-container">
      <div class="logo">
        <span><a href="/">Liam Champkin</a><span class="highlight-one">.</span></span>
      </div>

      <Nav />

    </div>
  </header>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
header {
  // anchors the mobile nav dropdown
  position: relative;
  background-color: rgba(0, 0, 0, 0.19);
  height: var(--size-xxxl);
}

.logo a {
  text-decoration: none;
}

.header-inner {
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  height: 100%;
}
</style>
