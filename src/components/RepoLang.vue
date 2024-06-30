<script lang="ts">
export type RepoLangProps = {
  LanguagesUrl: string | null;
};
</script>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<RepoLangProps>();
const languages: Array<string> = ref([]);
const isLoading = ref(true);
async function fetchLanguages() {
  try {
    await fetch(props.LanguagesUrl).then(async (response) => {
      var data = await response.json();
      languages.value = Object.keys(data);
    });
  } catch (e) {
    console.log(e);
  } finally {
    isLoading.value = false;
  }
  return languages;
}
fetchLanguages();
</script>

<template>
  <div v-if="isLoading">
    <small><em>Loading...</em></small>
  </div>
  <div v-if="!isLoading">
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item" v-for="language in languages" :key="language">
        {{ language }}
        <i class="devicon-html5-plain"></i>
      </li>
    </ul>
  </div>
</template>
