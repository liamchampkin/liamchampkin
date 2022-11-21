<!-- ./pages/index.vue -->
<template>
  <Header />
  <main class="content-container">
    <section class="hero-section grid-12">

      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    </section>
    <div class="nightshine"></div>
  </main>
  <Footer />
</template>

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
  height: 300px;
  width: 300px;
  object-fit: cover;
  border: 6px double #00bdff;
  padding: 6px;
  z-index: 1;
  position: relative;
  grid-column: 2 / 4;
  box-shadow: 3px 4px 8px #00000047;

}

@media only screen and (max-width: 800px) {
  .text {
    grid-column: 1 / 12;
    align-self: center;
    z-index: 2;
  }

  .liam-champkin {
    height: 100px;
    width: 100px;
    margin-bottom: var(--space-l);
    grid-column: 1 / 13;


  }
}

/* ... */
</style>