<template>
    <ion-page>
      <!-- Kopfleiste -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Konrad-Zuse-Schule</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <!-- Body Bereich -->
      <ion-content>
        <ion-list lines="full">
          <!-- Item-Profile -->
          <ion-item :button="true" router-link="/profile-page">
            <ion-label>Profil</ion-label>
          </ion-item>
  
          <!-- Item-Benachrichtigungen -->
          <ion-item :button="true" router-link="/notification-page">
            <ion-label>Benachrichtigungen</ion-label>
          </ion-item>
  
          <!-- Item-Sprache -->
          <ion-item :button="true" router-link="/language-page">
            <ion-label>Sprache</ion-label>
          </ion-item>
  
          <!-- Item-Design -->
          <ion-item :button="true" router-link="/design-page">
            <ion-label>Design</ion-label>
          </ion-item>
  
          <!-- Item-Datenschutz -->
          <ion-item :button="true" router-link="/safety-page">
            <ion-label>Datenschutz & Sicherheit</ion-label>
          </ion-item>
  
          <!-- Item-info -->
          <ion-item :button="true" router-link="/info-page">
            <ion-label>App Informationen</ion-label>
          </ion-item>
  
          <!-- Item-Hilfe -->
          <ion-item :button="true" router-link="/help-page">
            <ion-label>Hilfe & Feedback</ion-label>
          </ion-item>
  
          <!-- Item-Abmelden -->
          <ion-item :button="true" @click="showActionSheet = true">
            <ion-action-sheet
              :is-open="showActionSheet"
              @didDismiss="showActionSheet = false"
              header="Bist du dir sicher?"
              :buttons="actionButtons"
            ></ion-action-sheet>
            <ion-label>Abmelden</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { IonPage, IonContent, IonList, IonItem, IonLabel, IonActionSheet, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
  
  const router = useRouter();
  
  // Action Sheet Steuerung
  const showActionSheet = ref(false);
  
  // Die Buttons des Action Sheets
  const actionButtons = [
    {
      text: 'Abmelden',
      role: 'destructive',
      handler: () => {
        handleLogout();
      },
    },
    {
      text: 'Abbrechen',
      role: 'cancel',
      handler: () => {
        console.log("Abmeldung abgebrochen.");
      },
    },
  ];
  
  // Funktion für den Logout
  const handleLogout = () => {
    // JWT Token aus dem LocalStorage entfernen
    localStorage.removeItem("jwt");
  
    // Weiterleitung zur Login-Seite
    router.replace("/login-page");
  };
  </script>
  