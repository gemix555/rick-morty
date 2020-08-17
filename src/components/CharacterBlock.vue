<template>
  <div class="character-block">
    <div class="character-block__image">
      <img :src="character.image" :alt="character.name">
    </div>
    <div class="character-block__info">
      <span @click="detaledInfo">{{character.name}}</span>
      <span>{{character.status}} - {{character.species}}</span>
      <span>{{character.status}} - {{character.location.name}}</span>
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'character-block',
    props: {
      character: {
        type: Object,
        required: true,
        // default: 'Test'
      },     
    },
    methods: {
      detaledInfo() {
        
      }
    }
    
  }
</script>

<style  scoped>

</style>