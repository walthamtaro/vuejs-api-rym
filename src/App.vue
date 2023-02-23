<script setup>
import { RouterLink, RouterView } from "vue-router";
//import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="public/img/snuffles.png"
      width="125"
      height="125"
    />

    <div class="wrapper">

      <nav class="my-7">
        <RouterLink to="/" class="font-rm text-xl mx-5 ">Inicio</RouterLink>
        <RouterLink to="/personajes" class="font-rm text-xl mx-5 ">Personajes</RouterLink>
        <RouterLink to="/episodios" class="font-rm text-xl mx-5 ">Episodios</RouterLink>
        <RouterLink to="/about" class="font-rm text-xl mx-5 ">Acerca de</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>