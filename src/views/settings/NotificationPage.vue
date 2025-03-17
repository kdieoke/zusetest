<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
        <GlobalHeader />
        <ion-content>
            <ion-list>
                <ion-item :button="true">test</ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonList, IonHeader, IonToolbar, IonTitle, IonItem, IonButtons, IonBackButton} from '@ionic/vue';

import { GlobalHeader, GlobalNavMenu } from '../../components/navigation';
</script>