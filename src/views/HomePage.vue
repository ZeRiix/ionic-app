<template>
  <ion-page>
    <HeaderComponent title="Home"></HeaderComponent>
    <ion-content :fullscreen="true">
      <div class="container">
        <h2>Actuality</h2>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Card Title</ion-card-title>
            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import  { defineComponent } from 'vue';
import {
  IonContent, IonPage, IonTitle, IonToolbar, IonText, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/vue';
import HeaderComponent from "@/components/current/HeaderComponent.vue";

export default defineComponent({
  name: "HomePage",
  components: { HeaderComponent, IonPage, IonContent, }
});
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: black;
}

ion-card {
  box-shadow:5px 5px 5px rgb(56, 55, 55);
}

</style>