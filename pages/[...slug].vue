<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('content').path(route.path).first()
)
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>

<template>
  <main>
    <p>hey</p>
    <ContentRenderer :value="page" />
    <div class="nightshine"></div>
  </main>
</template>
