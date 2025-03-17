<template>
    <GlobalNavMenu />
    <ion-page id="main-content">
      <GlobalHeader />
        <!-- Body Bereich -->
        <ion-content>

          <ion-list lines="full">
            <!-- Item-Profile -->
            <ion-item :button="true" router-link="/profile-page">
              <ion-label>{{ l.settings_profile }}</ion-label>
            </ion-item>
    
            <!-- Item-Benachrichtigungen -->
            <ion-item :button="true" router-link="/notifications-page">
              <ion-label>{{ l.settings_notifications }}</ion-label>
            </ion-item>
    
            <!-- Item-Sprache -->
            <ion-item :button="true" router-link="/language-page">
              <ion-label>{{ l.settings_language }}</ion-label>
            </ion-item>
    
            <!-- Item-Design -->
            <ion-item :button="true" router-link="/design-page">
              <ion-label>{{ l.settings_widgets }}</ion-label>
            </ion-item>
    
            <!-- Item-Datenschutz -->
            <ion-item :button="true" router-link="/safety-page">
              <ion-label>{{ l.settings_data }}</ion-label>
            </ion-item>
    
            <!-- Item-info -->
            <ion-item :button="true" router-link="/info-page">
              <ion-label>{{ l.settings_info }}</ion-label>
            </ion-item>
    
            <!-- Item-Hilfe -->
            <ion-item :button="true" router-link="/help-page">
              <ion-label>{{ l.settings_help }}</ion-label>
            </ion-item>
    
            <!-- Item-Abmelden -->
            <ion-item :button="true" @click="showActionSheet = true">
              <ion-action-sheet id="logout" :is-open="showActionSheet" @didDismiss="showActionSheet = false" :buttons="actionButtons"></ion-action-sheet>
              <ion-label>{{ l.settings_logout }}</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-page>
  </template>
  
<script setup>
    import { ref, onMounted} from 'vue';
    import { useRouter } from 'vue-router';
    import { IonPage, IonContent, IonList, IonItem, IonLabel, IonActionSheet, IonHeader, IonToolbar, IonTitle} from '@ionic/vue';
    import { GlobalHeader, GlobalNavMenu } from '../components/navigation';
    import getTranslation from '../translations/getTranslation.js';


    let l = ref({});
  	let actionButtons = ref(
		[
			{
				text: "Abmelden",
				role: 'destructive',
				handler: () => {
					handleLogout();
				},
			},
			{
				text: "Abbrechen",
				role: 'cancel',
				handler: () => {
					console.log("Abmeldung abgebrochen.");
				},
			},
      	]
	)

    onMounted(() => {
        l.value = getTranslation(localStorage);
		actionButtons.value[0].text = l.value.confirm;
		actionButtons.value[1].text = l.value.cancel;
		document.getElementById("logout").setAttribute("header", l.value.settings_logoutConfirmation);
        document.getElementById("logout").setAttribute(":buttons", actionButtons);
    })

    const router = useRouter();
    
    // Action Sheet Steuerung
    const showActionSheet = ref(false);


    
    // Funktion für den Logout
    const handleLogout = () => {
        // JWT Token aus dem LocalStorage entfernen
        localStorage.removeItem("jwt");
    
        // Weiterleitung zur Login-Seite
        router.replace("/login-page");
    };
</script>
  