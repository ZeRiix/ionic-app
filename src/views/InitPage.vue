<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="save" href="/bde/save">
          <ion-icon :icon="saveOutline"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="calendar" href="/bde/calendar">
          <ion-icon :icon="calendarClearOutline"></ion-icon>
          <ion-badge>1</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="home" href="/bde/home">
          <ion-icon :icon="homeOutline"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="document" href="/bde/document">
          <ion-icon :icon="documentTextOutline"></ion-icon>
          <ion-badge>1</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="account" href="/bde/account">
          <ion-icon :icon="personOutline"></ion-icon>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonBadge } from '@ionic/vue';
import { calendar, personCircle, peopleOutline, mailOutline, cartOutline, homeOutline, saveOutline, personOutline, calendarClearOutline, documentTextOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'InitPage',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonBadge },
  setup() {
    return {
      saveOutline, personOutline, calendarClearOutline, documentTextOutline, homeOutline
    }
  }
});
</script>
