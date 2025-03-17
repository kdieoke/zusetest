<template>
    <ion-row>
        <ion-col>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{ l.widgets_döner_title }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-card-subtitle> {{ l.weekdays_1 }}</ion-card-subtitle>
                                <ion-card-subtitle> {{ l.widgets_döner_closed }}</ion-card-subtitle>
                            </ion-col>
                            <ion-col>
                                <ion-card-subtitle> {{ l.weekdays_2 }}</ion-card-subtitle>
                                <ion-card-subtitle>10:00 - 22:00</ion-card-subtitle>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-card-subtitle>{{ l.weekdays_3 }}</ion-card-subtitle>
                                <ion-card-subtitle>10:00 - 22:00</ion-card-subtitle>
                            </ion-col>
                            <ion-col>
                                <ion-card-subtitle>{{ l.weekdays_4 }}</ion-card-subtitle>
                                <ion-card-subtitle>10:00 - 22:00</ion-card-subtitle>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-card-subtitle>{{ l.weekdays_5 }}</ion-card-subtitle>
                                <ion-card-subtitle>10:00 - 22:00</ion-card-subtitle>
                            </ion-col>
                            <ion-col>
                                <ion-card-subtitle>{{ l.weekdays_6 }}</ion-card-subtitle>
                                <ion-card-subtitle>10:00 - 22:00</ion-card-subtitle>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-card-subtitle>{{ l.weekdays_7 }}</ion-card-subtitle>
                                <ion-card-subtitle>12:00 - 21:00</ion-card-subtitle>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
        </ion-col>
    </ion-row>
</template>

<script setup>
    import { onMounted, ref} from 'vue';
    import getTranslation from '../../translations/getTranslation.js';

    let l = ref({});

    onMounted(() => {
        l.value = getTranslation(localStorage);
        console.log(l);
    })
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