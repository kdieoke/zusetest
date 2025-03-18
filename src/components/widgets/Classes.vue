<template>
  <ion-row>
      <ion-col>
          <ion-card>
              <ion-card-header>
                  <ion-card-title>{{ l.widgets_classes_title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                  Nächste Stunde:
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