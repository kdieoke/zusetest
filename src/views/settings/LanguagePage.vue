<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
        <GlobalHeader />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Sprachseite Test</ion-card-title>
                </ion-card-header>
                <ion-list>
                  
      <!-- Selector (Dropdown), sichtbar, wenn showLanguageSelector true ist -->
       <ion-item>
        <ion-label>Sprache</ion-label>
        <ion-select v-model="selectedLanguage" @ionChange="setLanguage">
            <ion-select-option value="de">Deutsch</ion-select-option>
            <ion-select-option value="en">Englisch</ion-select-option>
            <ion-select-option value="fr">Französisch</ion-select-option>
        </ion-select>
        </ion-item>
                </ion-list>
            </ion-card>


        </ion-content>
    </ion-page>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import { IonPage, IonLabel, IonSelect, IonSelectOption, IonContent, IonCard, IonHeader, IonToolbar, IonCardHeader, 
    IonCardTitle, IonTitle, IonBackButton, IonButtons, IonList, IonItem} from '@ionic/vue';

import { GlobalHeader, GlobalNavMenu } from '../../components/navigation';
</script>

<script>
const selectedLanguage = ref("en")

const setLanguage = () => {
  localStorage.setItem("language", selectedLanguage.value)
}

const getLanguage = () => {
  selectedLanguage.value = localStorage.getItem("language") || "en"
}

onMounted(() => {
  getLanguage()
})
</script>