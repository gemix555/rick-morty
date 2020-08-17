<template>
  <div class="about">
    <h2>This is Character</h2>
    <character-block :character="character"/>
    <button @click="goBack">Go Back</button>
  </div>
</template>
<script>
import CharacterBlock from '@/components/CharacterBlock.vue'
export default  {
  name: 'rick-and-morty-character',
  comments: {CharacterBlock},
  data(){
    return {
      character: null
    }
  },
  methods: {
    goBack() {
       this.$router.push({name: 'RickAndMortyList'})
    }
  },
 async created() {
   const {id} = this.$route.params
    if(id) {
       this.character = await this.$store.dispatch('fetchSingleCharacter', id)
    }
  }
}
</script>
