<template>
    <ion-menu side="end" content-id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title> {{ l.menu_title }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list lines="full">
                <ion-item  href="/settings" v-if="!$route.path.includes('settings')">
                    <ion-label>{{ l.menu_settings }}</ion-label>
                </ion-item>
                <ion-item  href="/home" v-if="!$route.path.includes('home')">
                    <ion-label> {{ l.menu_home }}</ion-label>
                </ion-item>
                <ion-item  href="/profile-page" v-if="!$route.path.includes('profile')">
                    <ion-label> {{ l.menu_profile }}</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script setup>
    import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';

    import { onMounted, ref} from 'vue';
    import getTranslation from '../../translations/getTranslation.js';

    let l = ref({});

    onMounted(() => {
        l.value = getTranslation(localStorage);
        console.log(l);
    })
</script>