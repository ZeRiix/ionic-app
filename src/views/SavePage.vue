<template>
    <ion-page>
      <HeaderComponent title="Save"></HeaderComponent>
      <ion-content :fullscreen="true">
        <div class="container">
          <h1>SAVE</h1>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import  { defineComponent } from 'vue';
  import {
    IonContent,
    IonPage,
    IonTitle,
    IonToolbar,
    IonText
  } from '@ionic/vue';
  import HeaderComponent from "@/components/current/HeaderComponent.vue";
  
  export default defineComponent({
    name: "SavePage",
    components: { HeaderComponent, IonPage, IonContent}
  });
  </script>
  
  <style scoped>
  
  .container {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    color: black;
  }
  
  </style>