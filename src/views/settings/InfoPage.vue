<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
        <GlobalHeader />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ l.settings_info_title }}</ion-card-title>
                </ion-card-header>
                
            </ion-card>


        </ion-content>
    </ion-page>
</template>

<script setup>
    import { IonPage, IonContent, IonCard, IonHeader, IonToolbar, IonCardHeader, IonCardTitle, IonTitle, IonBackButton, IonButtons} from '@ionic/vue';
    import { GlobalHeader, GlobalNavMenu } from '../../components/navigation';
    import { onMounted, ref} from 'vue';
    import getTranslation from '../../translations/getTranslation.js';

    let l = ref({});

    onMounted(() => {
        l.value = getTranslation(localStorage);
        console.log(l);
    })
</script>