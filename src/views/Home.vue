<template>
    <div>
        <v-btn class="text-none" href="/file/resume.pdf" text>
            <v-icon left>mdi-file-pdf</v-icon>履歴書（PDF）
        </v-btn>
        <v-btn class="text-none" :href="getGitHubAccount" text>
            <v-icon left>mdi-github</v-icon>GitHub
        </v-btn>
        <p class="mt-5 mb-2">※ このサイトは以下の構成で作成しました</p>
        <ul>
            <li>Firebase Hosting</li>
            <li>Cloud Functions for Firebase</li>
            <li>Vue CLI</li>
            <li>Vuetify</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        getGitHubAccount() {
            return process.env.VUE_APP_GITHUB_ACCOUNT;
        }
    }
};
</script>
