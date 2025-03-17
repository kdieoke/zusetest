<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
        <GlobalHeader />
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ l.settings_language_title }}</ion-card-title>
                </ion-card-header>
                <ion-list>
                  
      <!-- Selector (Dropdown), sichtbar, wenn showLanguageSelector true ist -->
       <ion-item>
        <ion-label>{{ l.settings_language_menuTitle }}</ion-label>
        <ion-select v-model="selectedLanguage" @ionChange="setLanguage">
            <ion-select-option value="de">{{ l.settings_language_de }}</ion-select-option>
            <ion-select-option value="en">{{ l.settings_language_en }}</ion-select-option>
            <ion-select-option value="fr">{{ l.settings_language_fr }}</ion-select-option>
        </ion-select>
        </ion-item>
                </ion-list>
            </ion-card>


        </ion-content>
    </ion-page>
</template>

<script setup>
    import {ref, onMounted} from 'vue';
    import { IonPage, IonLabel, IonSelect, IonSelectOption, IonContent, IonCard, IonHeader, IonToolbar, IonCardHeader, IonCardTitle, IonTitle, IonBackButton, IonButtons, IonList, IonItem} from '@ionic/vue';
    import { GlobalHeader, GlobalNavMenu } from '../../components/navigation';
    import getTranslation from '../../translations/getTranslation.js';
    import config from '../../config/config.json';

    let l = ref({});

    onMounted(() => {
        getLanguage();
        l.value = getTranslation(localStorage);
    })

    const selectedLanguage = ref(config.prefs_default_lang); 

    const setLanguage = () => {
    localStorage.setItem("prefs_lang", selectedLanguage.value)
    }

    const getLanguage = () => {
    selectedLanguage.value = localStorage.getItem("prefs_lang") || config.prefs_default_lang; 
    }
</script>