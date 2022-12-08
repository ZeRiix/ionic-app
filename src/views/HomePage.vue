<template>
  <ion-page>
    <HeaderComponent title="Home"></HeaderComponent>
    <ion-content :fullscreen="true">
      <ion-text>Dernier article</ion-text>
      <div class="container">
        <ion-card>
          <ion-card-header>
            <ion-img src="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"></ion-img>
            <ion-label>Card Title</ion-label>
            <ion-badge color="success">New</ion-badge>
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
  IonContent, IonPage, IonTitle, IonToolbar, IonText, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonBadge, IonLabel
} from '@ionic/vue';
import HeaderComponent from "@/components/current/HeaderComponent.vue";

export default defineComponent({
  name: "HomePage",
  components: { HeaderComponent, IonPage, IonContent, IonBadge}
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

ion-text {
  color: black;
  font-weight: semi-bold;
  font-size: 20px;
  margin: 10px;
}

ion-label {
  font-weight: bold;
  font-size: 20px;
}

</style>