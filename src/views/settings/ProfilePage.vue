<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
        <GlobalHeader />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>About You</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <h2>vorname.nachname@konrad-zuse-schule.de</h2>
                </ion-card-content>
            </ion-card>


        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonCard, IonCardContent, IonHeader, IonToolbar, IonCardHeader, 
    IonCardTitle, IonTitle, IonBackButton, IonButtons} from '@ionic/vue';

import { GlobalHeader, GlobalNavMenu } from '../../components/navigation';
// Funktion, die überprüft, ob der JWT existiert und ob der Benutzer navigieren darf
const goBack = () => {
  window.history.back(); // Gehe zur vorherigen Seite im Navigationsstack zurück
};
</script>