<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="contact" href="/ionic/contact">
          <ion-icon :icon="peopleOutline"></ion-icon>
          <ion-label>Contact</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="home" href="/ionic/home">
          <ion-icon :icon="homeOutline"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="message" href="/ionic/message">
          <ion-icon :icon="mailOutline"></ion-icon>
          <ion-label>Message</ion-label>
          <ion-badge>1</ion-badge>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonBadge } from '@ionic/vue';
import { calendar, personCircle, peopleOutline, mailOutline, cartOutline, homeOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'InitPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonBadge },
  setup() {
    return {
      calendar, personCircle, peopleOutline, mailOutline, cartOutline, homeOutline
    }
  }
});
</script>
