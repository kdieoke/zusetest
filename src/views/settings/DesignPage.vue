<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
        <GlobalHeader />
        
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ l.settings_widgets_title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-toggle alignment="center" :checked="widgets.includes('Döner')" @click="toggleWidget('Döner')" >{{ l.widgets_döner_title }}</ion-toggle>
                    <br>
                    <ion-toggle alignment="center" :checked="widgets.includes('Messages')" @click="toggleWidget('Messages')">{{ l.widgets_messages_title }}</ion-toggle>
                    <br>
                    <ion-toggle alignment="center" :checked="widgets.includes('Contacts')"  @click="toggleWidget('Contacts')">{{ l.widgets_contacts_title }}</ion-toggle>
                    <br>
                    <ion-toggle alignment="center" :checked="widgets.includes('Mealplan')"  @click="toggleWidget('Mealplan')">Speisekarte</ion-toggle>
                    <br>
                    <ion-toggle alignment="center" :checked="widgets.includes('Classes')"  @click="toggleWidget('Classes')">Stundenplan</ion-toggle>
                    <br>
                    <ion-toggle alignment="center" :checked="widgets.includes('PT')"  @click="toggleWidget('PT')">Fahrzeiten</ion-toggle>
                    <br>
                    <ion-toggle alignment="center" :checked="widgets.includes('Homework')"  @click="toggleWidget('Homework')">Hausaufgaben</ion-toggle>
                    <br>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script setup>
    import { IonPage, IonContent, IonCard, IonHeader, IonToolbar, IonCardHeader, 
        IonCardTitle, IonCardContent, IonTitle, IonBackButton, IonButtons, IonNav} from '@ionic/vue';
    import {ref, onMounted} from 'vue';
    import { GlobalHeader, GlobalNavMenu } from '../../components/navigation';
    import config from '../../config/config.json';
    import getTranslation from '../../translations/getTranslation.js';

    let l = ref({});
    let widgets = ref([]);

    onMounted(() => {
        widgets = ref(getWidgets());
        console.log(getWidgets());
        l.value = getTranslation(localStorage);
    });

    const toggleWidget = (widget) => {
        let widgets = JSON.parse(localStorage.getItem('prefs_widgets')) || [];
        if(config.widgets.includes(widget)){
            if(widgets.includes(widget)){
                widgets.splice(widgets.indexOf(widget), 1);
            }else {
                widgets.push(widget);
            }
            localStorage.setItem('prefs_widgets', JSON.stringify(widgets));
        }
    }

    const getWidgets = () => {
        if(typeof localStorage !== undefined){
            const widgets = localStorage.getItem('prefs_widgets');
            return widgets ? JSON.parse(widgets) : [];
        }

        return [];
    }

</script>