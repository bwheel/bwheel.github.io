<script setup lang="ts">
import RepoDetails, { RepoDetailProps } from '../components/RepoDetails.vue';
import { ref } from 'vue';
const isLoading = ref(true);
const repos: Array<RepoDetailProps> = ref([]);
async function fetchRepos() {
  try {
    isLoading.value = true;
    await fetch('https://api.github.com/users/bwheel/repos').then(async (response) => {
      const data = await response.json();
      repos.value = data.map((r) => ({
        Name: r.name,
        LinkUrl: r.html_url,
        Description: r.description,
        CreatedAt: r.created_at,
        LanguagesUrl: r.languages_url,
      }));
    });
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
  return repos;
}
fetchRepos();
</script>

<template>
  <main>
    <div v-if="isLoading">
      <small><em>Loading...</em></small>
    </div>
    <div v-if="!isLoading">
      <div class="container" v-for="repo in repos" :key="repo.Name">
        <RepoDetails v-bind="repo" />
      </div>
    </div>
  </main>
</template>

<style></style>
