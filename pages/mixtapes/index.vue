
<script setup>
// set meta for page
useHead({
  title: "All articles",
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>
<template>
  <Header />
  <main>
    <div class="content-container">
      <header class="page-heading">
        <div class="wrapper">
          <h1 class="text-5xl font-extrabold">Notes</h1>
          <p class="font-medium text-lg">Notes include random thoughts and the odd UX and front end dev article. Check
            out my Mixtapes section for uninterrupted DJ sets.</p>
        </div>
      </header>
      <section class="posts ">
        <!-- Render list of all articles in ./content/blog using `path` -->
        <!-- Provide only defined fields in the `:query` prop -->
        <ContentList path="/mixtape" :query="{
          only: ['title', 'description', 'tags', '_path', 'img', 'category', 'color'],
          where: {
        
          },
          $sensitivity: 'base',
        }">
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
</template>
<style scoped>
/* ... */
</style>