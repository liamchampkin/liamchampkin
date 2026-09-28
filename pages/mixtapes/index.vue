
<script setup lang="ts">
// set meta for page
const title = ref('Mixtapes')
const desc = ref("")
const { data: list } = await useAsyncData('mixtapes-list', () =>
  queryCollection('mixtapes')
    .select('title', 'description', 'tags', 'path', 'img', 'category', 'color', 'date')
    .order('date', 'DESC')
    .limit(10)
    .all()
)

useHead({
  title: title,
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>
<template>

  <Header />
  <main>
    <div class="content-container">
      <header class="page-heading">
        <div class="wrapper">
          <h1>{{ title }}</h1>
          <p class="font-medium text-lg">{{ desc }}</p>
        </div>
      </header>
      <section class="posts ">
        <!-- Render list of all mixtapes in ./content/mixtapes -->
        <ul v-if="list?.length" class="article-list grid-12">
          <li v-for="article in list" :key="article.path" class="article">
            <NuxtLink :to="article.path">
              <div class="card">
                <div class="banner" :style="{ 'background-color': article.color }">
                  <h2>{{ article.title }}</h2>
                </div>
                <div class="card-content">
                  <p>{{ article.description }}</p>
                  <!-- <ul class="article-tags">
                    <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                  </ul> -->
                </div>


              </div>
            </NuxtLink>
          </li>
        </ul>
        <p v-else>No articles found.</p>
      </section>
    </div>
    <div class="nightshine"></div>
  </main>
  <Footer />

</template>
<style scoped>
/* ... */
</style>
