<script lang="ts" setup>
import { ref } from 'vue'

const isNavOpen = ref(false)

const onMenuClick = () => {
  isNavOpen.value = !isNavOpen.value
}
</script>

<template>
  <header class="header">
    <a href="/"><div class="logo">Cuisine</div></a>
    

    <MyButton class="menu-btn" @click="onMenuClick">
      {{ isNavOpen ? 'Fermer' : 'Menu' }}
    </MyButton>

    <nav :class="{ open: isNavOpen }">
      <ul>
        <li><a href="/recipe">Recettes</a></li>
        <li><a href="#">Ingrédients</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  position: relative;  
  width: 100%;         
  max-width: 100%;    
  margin: 0;           

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #fef7f2;
  border-bottom: 2px solid #e4c5a1;

  .logo {
    font-size: 1.7rem;
    font-weight: bold;
    color: black;
  }

  .menu-btn {
    display: block;
    z-index: 20;
  }

  nav {
    position: absolute;
    top: 70px;
    right: 0;
    width: 200px;
    background: white;
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 1rem;
    display: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);

    &.open {
      display: block;
    }
  }

  @media (min-width: 768px) {
    .menu-btn {
      display: none;
    }

    nav {
      position: static;
      display: block !important;
      width: auto;
      padding: 0;
      background: none;
      border: none;
      box-shadow: none;

      ul {
        display: flex;
        gap: 2rem;
      }
    }
  }
}

/* Empêche complètement le scroll horizontal */
body {
  overflow-x: hidden;
}

</style>