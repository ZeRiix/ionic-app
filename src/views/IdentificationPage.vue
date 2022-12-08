<template>
    <ion-page>
      <ion-content :fullscreen="true">
  
        <div class="container">
          <div class="top">
            <a href="/connexion"><ion-icon :icon="arrowBackOutline"></ion-icon></a>
            <ion-text color="light">Bon retour parmis nous</ion-text>
          </div>
          <div class="mid">
            <ion-list class="custom">
                <ion-item class="custom">
                    <ion-label position="stacked"><h1>Email</h1></ion-label>
                    <ion-input color="medium" type="email"  placeholder="mail@ges.com"></ion-input>
                </ion-item>
                <ion-item class="custom" counter="true" :counterFormatter="customFormatter">
                    <ion-label position="stacked"><h1>Mot de passe</h1></ion-label>
                    <ion-input color="medium" type="password"  placeholder="Mot de passe" maxlength="20"></ion-input>
                </ion-item>
                <ion-item class="toggle-input">
                    <ion-label>Mémoriser</ion-label>
                    <ion-toggle slot="end"></ion-toggle>
                </ion-item>
            </ion-list>
          </div>
          <div class="bot">
            <ion-button color="success" href="/ionic/home"><ion-text color="dark">Connexion</ion-text></ion-button>
        </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { IonPage, IonContent, IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
  import { arrowBackOutline } from 'ionicons/icons';
  import logo from '../assets/peoplefamily.svg'
  import HeaderComponent from "@/components/current/HeaderComponent.vue";
  
  export default  defineComponent({
    name: 'IdentificationPage',
    components: {IonContent, IonPage},
    setup() {
        return {
        arrowBackOutline
        }
    },
    methods: {
      customFormatter(inputLength, maxLength) {
        return `${maxLength - inputLength} caractères restants`;
      }
    },
    data: function () {
      return {
        logo: logo
      }
    }
  });
  </script>
  
  <style scoped>

  .toggle-input {
    --background: transparent;
    background-color: transparent;
    --border: transparent;
    color: black;
    --highlight-color-focused: #0DCDAA !important; 
  }

  ion-icon {
    color: black;
    margin-bottom: 2rem;
    scale: 2;
  }

  .top a {
    text-decoration: none;
  }
  .top ion-text {
    font-size: 24px;
    font-weight: bold;
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
    align-items: flex-start;
  }
  .bot {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ion-text {
    text-transform: none;
  }
  .custom {
    --background: transparent;
    background-color: transparent;
    color: black;
    --highlight-color-focused: #0DCDAA !important; 
  }
  </style>
  