<template>
  <header>
    <div class="header-inner content-container">
      <div class="logo">
        <span>Liam Champkin<span class="highlight-one">.</span></span>
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
  background-color: rgba(0, 0, 0, 0.19);
  height: var(--size-xxxl);


}

.header-inner {
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  height: 100%;
}
</style>