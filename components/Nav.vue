<template>
  <nav :class="{ open }">
    <button class="nav-toggle" type="button" aria-controls="site-nav" :aria-expanded="open"
      :aria-label="open ? 'Close menu' : 'Open menu'" @click="open = !open">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <ul id="site-nav">
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

<script setup>
const open = ref(false)
const route = useRoute()

// close the mobile menu after navigating
watch(() => route.fullPath, () => { open.value = false })

const onKeydown = (e) => {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
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

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: none;
  border: 0;
  cursor: pointer;

  .bar {
    display: block;
    height: 2px;
    width: 100%;
    background-color: white;
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.2s ease;
  }
}

// switch to the toggle menu when the header (the content container) is too narrow for the inline links
@container contentContainer (max-width: 600px) {
  .nav-toggle {
    display: flex;
  }

  nav ul {
    display: none;
    // positioned against the <header>, so the panel spans the full width beneath it
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 10;
    padding: var(--space-xs) 0;
    background-color: rgb(14 23 42 / 0.96);
    backdrop-filter: blur(8px);
    box-shadow: 0 10px 20px rgb(0 0 0 / 0.4);

    li {
      display: block;
      margin-left: 0;

      a {
        display: block;
        padding: var(--space-s) var(--space-m);
      }
    }
  }

  nav .router-link-active {
    box-shadow: inset 4px 0px 0px 0px var(--primary-accent);
  }

  nav.open {
    ul {
      display: block;
    }

    .bar:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .bar:nth-child(2) {
      opacity: 0;
    }

    .bar:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
}
</style>
