<template>
    <ion-menu side="end" content-id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-title>Menu Content</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list lines="full">
                <ion-item  href="/settings" v-if="!$route.path.includes('settings')">
                    <ion-label>Einstellungen</ion-label>
                </ion-item>
                <ion-item  href="/home" v-if="!$route.path.includes('home')">
                    <ion-label>Home</ion-label>
                </ion-item>
                <ion-item  href="/profile-page" v-if="!$route.path.includes('profile')">
                    <ion-label>Profil</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>

<script setup>
    import { IonMenu, menuController, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const redirect = (path = '/home') => {
        menuController.close();
        router.push(path);
    }; 
</script>