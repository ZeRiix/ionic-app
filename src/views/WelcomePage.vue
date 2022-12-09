<template>
  <ion-page>
    <ion-content :fullscreen="true">

      <div class="container">
        <div class="top">
          <ion-text>Bienvenue !</ion-text>
          <ion-text>Connecte-toi ou inscris-toi avec<br>tes identifiants GES</ion-text>
        </div>
        <div class="mid">
          <ion-img :src="logo" alt="Image de Connexion"></ion-img>
        </div>
        <div class="bot">
          <ion-button color="success" href="/identification">
            <ion-text color="dark">Connexion</ion-text>
          </ion-button>
          <ion-button color="medium" fill="outline" href="/inscription">
            <ion-text>Pas de compte ?</ion-text>
            <ion-text color="success">&nbsp;Inscription</ion-text>
          </ion-button>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<script>
import {defineComponent} from 'vue';
import {IonPage, IonContent} from '@ionic/vue';
import logo from '../assets/peoplefamily.svg'
import HeaderComponent from "@/components/current/HeaderComponent.vue";

export default defineComponent({
  name: 'ConnexionPage',
  components: {IonContent, IonPage},
  data: function () {
    return {
      logo: logo
    }
  }
});
</script>

<style scoped>
.top ion-text {
  color: black;
}

.top ion-text:first-child {
  font-size: 32px;
  font-weight: bold;
}

.top ion-text:last-child {
  font-size: 16px;
  opacity: 0.5;
}

.container {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}

.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.bot {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

ion-text {
  text-transform: none;
}
</style>
