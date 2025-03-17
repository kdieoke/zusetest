<template>
    <ion-row>
        <ion-col>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Wichtige Kontaktdaten</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                <ion-card-subtitle>Montag - Donnerstag</ion-card-subtitle>
                                <ion-card-subtitle>7:30 - 12:00</ion-card-subtitle>
                                <ion-card-subtitle>13:00 - 15:00</ion-card-subtitle>
                            </ion-col>
                            <ion-col>
                                <ion-card-subtitle>Jahnstr. 5</ion-card-subtitle>
                                <ion-card-subtitle>36088 Hünfeld</ion-card-subtitle>
                                <ion-card-subtitle>+49 661 6006554000</ion-card-subtitle>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-card-subtitle>Freitag</ion-card-subtitle>
                                <ion-card-subtitle>7:30 - 15:00</ion-card-subtitle>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                </ion-card-content>
            </ion-card>
        </ion-col>
    </ion-row>
</template>


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