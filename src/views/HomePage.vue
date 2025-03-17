<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
        <GlobalHeader />
        <ion-content>
            <ion-grid id="grid">
                <Döner v-if="widgets.includes('Döner')" />
                <Mealplan v-if="widgets.includes('Mealplan')"/>
                <Contacts v-if="widgets.includes('Contacts')"/>
                <Messages v-if="widgets.includes('Messages')"/>
                <Classes v-if="widgets.includes('Classes')"/>
                <PT v-if="widgets.includes('PT')"/>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup>
    import { 
                IonGrid,
                IonPage,
                IonContent,
    } from '@ionic/vue';
    import { onMounted, ref} from 'vue';

    import { Contacts, Döner, Messages, Mealplan, Classes, PT} from '../components/widgets';
    import { GlobalHeader, GlobalNavMenu } from '../components/navigation';
    import config from '../config/config.json';
    

    let widgets = ref([]);

    onMounted(() => {
        widgets = ref(getWidgets());
        console.log(getWidgets());
    });

    const getWidgets = () => {
        const defaultWidgets = config.prefs_default_widgets;

        if(typeof localStorage !== undefined){
            const widgets = localStorage.getItem('prefs_widgets');
            return widgets ? JSON.parse(widgets) : defaultWidgets;
        }

        return defaultWidgets;
    }
</script>





<style scoped>
    ion-card {
        --background: #080808;
        --color: #ffffff;
        margin-top: 100px;
    }

    ion-card-title {
        --color: #52ffe4;
    }
</style>