<!-- ./pages/index.vue -->
<template>
  <Header />
  <main>
    <div class="content-container">


      <section class="hero-section grid-12">

        <div class="passport-image-container">
          <img class="liam-champkin" src="~/assets/images/profile-2.jpg"
            alt="A profile picture of Liam wearing a silly hat">
        </div>
        <div class="text">
          <h1 class="">UX <span class="highlight-one">/</span> UI developer specialising in design systems and
            accessibility
          </h1>
          <p>I help design and develop digital products with a focus on user research and accessibility through design
            systems.
            I have experience in developing Vue, Nuxt, Wordpress and Drupal websites.

          </p>
        </div>


      </section>
      <div class="nightshine"></div>
    </div>
  </main>
  <Footer />
</template>

<script setup>
useHead({
  title: 'Liam Champkin - UX / UI developer'
})
</script>

<style scoped>
.hero-section {
  align-content: center;
  height: calc(100vh - var(--size-xxxl) - var(--size-xxxl));
}

.mission {}

.squiggle {
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: var(--primary-accent);

}

.text {
  grid-column: 5 / 12;
  align-self: center;
  z-index: 2;
}

.liam-champkin {
  opacity: 1;
  border-radius: 100%;
  aspect-ratio: 1 / 1;
  max-width: 100%;
  object-fit: cover;
  border: 6px double #00bdff;
  padding: 6px;
  z-index: 1;
  position: relative;
  box-sizing: border-box;
  box-shadow: 3px 4px 8px #00000047;
}

.passport-image-container {
  display: flex;
  align-items: center;
  grid-column: 2 / 5;

}

@media only screen and (max-width: 800px) {
  .text {
    grid-column: 1 / 12;
    align-self: center;
    z-index: 2;
  }

  .passport-image-container {
    grid-column: 1 / 13;

  }

  .liam-champkin {
    height: 150px;
    width: 150px;

  }
}

/* ... */
</style>