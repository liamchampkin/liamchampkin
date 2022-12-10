<template>
  <Header />

  <main>
    <div class="content-container">
      <section class="grid-12">

        <ContentDoc v-slot="{ doc }">
          <article class="article article-post">
            <div class="article-meta" :style="{ 'background-color': doc.color }">
              <img class="liam-champkin" src="~/assets/images/me.png"
                alt="A profile picture of Liam wearing a silly hat">
              <h1>{{ doc.title }}</h1>

              <!-- <p>{{ doc.date }}</p> -->
            </div>
            <div class="article-content">
              <ContentRenderer :value="doc" />
            </div>
          </article>
        </ContentDoc>
      </section>
    </div>
    <div class="nightshine"></div>
  </main>
  <Footer />
</template>

<style scoped>
.liam-champkin {
  opacity: 1;
  border-radius: 100%;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border: 6px double #fff;
  padding: 6px;
  z-index: 1;
  position: relative;
  grid-column: 2 / 4;
  box-shadow: 3px 4px 8px #00000047;
  margin-bottom: var(--space-m);

}
</style>
