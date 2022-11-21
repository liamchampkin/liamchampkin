<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
      <li>Mixtapes</li>
    </ul>
  </nav>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
nav {
  justify-self: flex-end;

  ul {
    li {
      display: inline;
      color: white;
      margin-left: var(--space-m);

      a {
        text-decoration: none;
        padding: 13px;
      }
    }
  }



  .router-link-active {

    box-shadow: 0px 4px 0px 0px var(--primary-accent);

  }
}
</style>