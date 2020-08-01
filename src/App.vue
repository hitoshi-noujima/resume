<template>
    <v-app id="app">
        <v-main>
            <v-container>
                <v-tabs>
                    <v-tab :to="{ name: 'home' }">履歴書</v-tab>
                    <v-tab :to="{ name: 'work' }">職務経歴書</v-tab>
                </v-tabs>
                <v-row justify="center">
                    <v-col>
                        <router-view />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App'
};
</script>
