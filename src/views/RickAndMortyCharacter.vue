<template>
  <div class="about">
    <h2>This is Character</h2>
    <character-block
        v-if="character"
        :character="character"
    />
    <button @click="goBack">Go Back</button>
  </div>
</template>
<script>
import CharacterBlock from '@/components/CharacterBlock.vue'
export default  {
  name: 'rick-and-morty-character',
  components: {CharacterBlock},
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
    try {
      const {id} = this.$route.params
      if(id) {
        const {data} = await this.$store.dispatch('fetchSingleCharacter', id)
        this.character = data
      }
    }catch (e) {
      console.log(e)
    }

  }
}
</script>
