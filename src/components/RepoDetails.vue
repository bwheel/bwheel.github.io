<script lang="ts">
export type RepoDetailProps = {
  Name: string;
  LinkUrl: string;
  Description: string | null;
  CreatedAt: string;
  LanguagesUrl: string | null;
};
</script>

<script setup lang="ts">
import RepoLang, { RepoLangProps } from './RepoLang.vue';

const props: RepoDetailProps = defineProps<RepoDetailProps>();
const repoLang: RepoLangProps = {
  LanguagesUrl: props.LanguagesUrl,
};
/*
"tags_url": "https://api.github.com/repos/bwheel/CSEE-5590-AI-Cyber-Security/tags",
"languages_url": "https://api.github.com/repos/bwheel/CSEE-5590-AI-Cyber-Security/languages",
"stargazers_url": "https://api.github.com/repos/bwheel/CSEE-5590-AI-Cyber-Security/stargazers",
"git_url": "git://github.com/bwheel/CSEE-5590-AI-Cyber-Security.git",
"ssh_url": "git@github.com:bwheel/CSEE-5590-AI-Cyber-Security.git",
"clone_url": "https://github.com/bwheel/CSEE-5590-AI-Cyber-Security.git",

"homepage": null,
"size": 10423,
"stargazers_count": 0,
"watchers_count": 0,
"language": "Jupyter Notebook",
*/
</script>

<template>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ props.Name }}</h5>

            <RepoLang v-bind="repoLang" />

            <small>{{ props.CreatedAt }}</small>
            <hr />
            <p class="lead">
              {{ props.Description }}
            </p>
            <a
              :href="props.LinkUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-sm"
            >
              Repository <i class="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
