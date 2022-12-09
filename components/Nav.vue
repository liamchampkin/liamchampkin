<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/notes">Notes</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/mixtapes">Mixtapes</NuxtLink>
      </li>
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
    padding-left: 0;

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