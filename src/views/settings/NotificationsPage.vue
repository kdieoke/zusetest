<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
        <GlobalHeader />
        <ion-content>
            <ion-list>
                <ion-item :button="true">{{ l.settings_notifications_title }}</ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>

<script setup>
    import { IonPage, IonContent, IonList, IonHeader, IonToolbar, IonTitle, IonItem, IonButtons, IonBackButton} from '@ionic/vue';
    import { GlobalHeader, GlobalNavMenu } from '../../components/navigation';
    import { onMounted, ref} from 'vue';
    import getTranslation from '../../translations/getTranslation.js';

    let l = ref({});

    onMounted(() => {
        l.value = getTranslation(localStorage);
        console.log(l);
    })
</script>