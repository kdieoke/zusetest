<template>
    <ion-page>
        <!-- Kopfleiste -->
        <ion-header>
            <ion-toolbar>
                 <ion-title>Konrad-Zuse-Schule</ion-title>
            </ion-toolbar>
        </ion-header>


        <!-- Body bereich -->
        <ion-content>

            <ion-grid id="grid">
                <Döner v-if="widgets.includes('Döner')" />
                <Test v-if="widgets.includes('Test')"/>
                <Tost v-if="widgets.includes('Tost')"/>
                <Messages v-if="widgets.includes('Messages')"/>
            </ion-grid>

        </ion-content>
    </ion-page>
   
</template>

<script setup>
    import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
    import { onMounted, ref} from 'vue';
    import Döner from '../components/DönerComp.vue';
    import Test from '../components/testComp.vue';
    import Tost from '../components/tostComp.vue';
    import Messages from '../components/MessagesComp.vue';
    let widgets = ref([]);

    onMounted(() => {
        widgets = ref(getWidgets());
        console.log(getWidgets());
    });
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


<script>
    import { defineComponent } from 'vue';
    import config from '../config/config.json';
    import { onMounted } from 'vue';

    export default defineComponent({
        components: { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonHeader, IonToolbar, IonTitle, IonContent },
    });

    function getWidgets() {

        const defaultWidgets = config.prefs_default_widgets;

        if(typeof localStorage !== undefined){
            const widgets = localStorage.getItem('prefs_widgets');
            return widgets ? JSON.parse(widgets) : defaultWidgets;
        }
        return defaultWidgets;
    }

</script>