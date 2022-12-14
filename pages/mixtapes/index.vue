
<script setup lang="ts">
// set meta for page
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const title = ref('Mixtapes')
const desc = ref("")
const query: QueryBuilderParams = { path: '/mixtape', limit: 2, sort: { date: -1 }, only: ['title', 'description', 'tags', '_path', 'img', 'category', 'color', 'date'], $sensitivity: 'base', }

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
        <!-- Render list of all articles in ./content/blog using `path` -->
        <!-- Provide only defined fields in the `:query` prop -->
        <ContentList :query="query">
          <!-- Default list slot -->
          <template v-slot="{ list }">
            <ul class="article-list grid-12">
              <li v-for="article in list" :key="article._path" class="article">
                <NuxtLink :to="article._path">
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
          </template>

          <!-- slot to display message when no content is found -->
          <template #not-found>
            <p>No articles found.</p>
          </template>
        </ContentList>
      </section>
    </div>
    <div class="nightshine"></div>
  </main>
  <Footer />

</template>
<style scoped>
/* ... */
</style>