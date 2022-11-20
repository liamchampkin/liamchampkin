<template>
  <footer>
    <div class="content-container">
      <div class="left">
        <p class="size-small">Liam Champkin © {{ new Date().getFullYear() }}</p>
      </div>
      <div class="right">
        <nav>
          <ul>
            <li>
              <NuxtLink to="https://soundcloud.com/liamchampkin"><img class="icon"
                  src="~/assets/images/soundcloud.svg" /><span>Soundcloud</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://www.instagram.com/l.ia.m_/"><img class="icon"
                  src="~/assets/images/instagram.svg" /><span>Instagram</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://twitter.com/liamchampkin"><img class="icon"
                  src="~/assets/images/twitter.svg" /><span>Twitter</span></NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://github.com/liamchampkin"><img class="icon"
                  src="~/assets/images/github.svg" /><span>Github</span></NuxtLink>
            </li>

          </ul>
        </nav>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: rgba(0, 0, 0, 0.19);
  height: var(--size-xxxl);
  z-index: 2;
}

.content-container {
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  justify-content: center;
  height: 100%;
}


nav {
  width: 100%;

  ul {
    display: flex;

    li {
      display: inline;
      color: white;
      margin-left: var(--space-s);
      font-size: var(--size-s);

      .icon {
        margin-right: var(--space-xs);

        position: relative;
        width: var(--size-l);
      }

      a {
        text-decoration: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        height: 100%;

        &:hover {
          text-decoration: underline;
          text-decoration-color: hotpink;
          text-decoration-style: wavy;
        }
      }
    }
  }

}

@media only screen and (max-width: 800px) {
  footer {
    height: auto;
    padding: var(--space-s) 0;
  }

  .left {
    margin-bottom: var(--space-s);
  }

  .content-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  nav ul {
    display: block;

    li {
      display: block;
      width: 100%;
      margin: 0;
    }
  }


}
</style>