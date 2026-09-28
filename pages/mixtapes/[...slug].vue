<script setup lang="ts">
const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () =>
  queryCollection('mixtapes').path(route.path).first()
)
if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Mixtape not found' })
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <Header />

  <main>
    <div class="content-container">
      <section class="grid-12">

        <article class="article article-post">
          <div class="article-meta" :style="{ 'background-color': doc.color }">
            <img class="liam-champkin" src="~/assets/images/profile-2.jpg"
              alt="A profile picture of Liam wearing a silly hat">
            <h1>{{ doc.title }}</h1>
            <p>{{ formatDate(doc.date) }}</p>
          </div>
          <div class="article-content">
            <ContentRenderer :value="doc" />
          </div>
        </article>
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
