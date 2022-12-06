<template>
    <ion-header>
      <ion-toolbar>
        <div class="navbar-items">
          <ion-title>Home</ion-title>
          <ion-button color="dark" href="/connexion">Déconnexion</ion-button>
        </div>
      </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">

import { defineComponent} from "vue";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/vue"

export default defineComponent({
  name: 'HeaderComponent',
  components: {IonHeader, IonToolbar},
  props: {
    title: String
  }
});
</script>

<style scoped>
ion-title {
  text-align: center;
}

.navbar-items{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
}

ion-button {
  position: absolute;
  right: 0;
}

</style>