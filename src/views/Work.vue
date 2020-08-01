<template>
    <article class="work">
        <header>
            <h1 class="text-center font-weight-bold display-1">職務経歴書</h1>
            <p class="text-right">{{ nowDate }} 現在</p>
            <p class="text-right">氏名：{{ getName }}</p>
        </header>
        <div v-html="getResumeSource"></div>
    </article>
</template>

<script>
import resumeSource from '@/assets/file/work.html';
import dotenv from 'dotenv';
dotenv.config();

export default {
    name: 'Work',
    computed: {
        getName() {
            return process.env.VUE_APP_USERNAME;
        },
        nowDate() {
            const d = new Date();
            return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
        },
        getResumeSource() {
            return resumeSource;
        }
    }
};
</script>
