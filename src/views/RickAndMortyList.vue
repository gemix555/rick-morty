<template>
  <div class="home">
   <h1>Rick and Morty</h1>
   <!-- <pre>{{characters}}</pre> -->
   <div class="characters-list">
     <CharacterBlock
      v-for="character in characters"
      :key="character.id"
      :character="character"
      />
   </div>
    <paginate
      v-model="currentPage"
      :page-count="pages"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
import CharacterBlock from '@/components/CharacterBlock.vue'
import Paginate from 'vuejs-paginate'
export default {
  name: 'rick-and-morty-list',
  components: { CharacterBlock, Paginate},
  data() {
    return {
      currentPage: 1
    }
  },
  methods: {
    clickCallback(pageNum) {
      console.log("Page", pageNum)
    }
  },
  created() {
    // this.$store.dispatch('fetchCharacters', this.currentPage)
  },
  computed: {
    characters() {
      //console.log(this.$store.getters['getCharacterByPage'](this.currentPage), 'CHARACTERS')
      return this.$store.getters['getCharacterByPage'](this.currentPage)
    },
    firstCharacter() {
      return this.$store.getters['getCharacterById']({id: 1, page: 1})
    },
    pages() {
        return this.$store.state.pages
    }
  },
  watch: {
    currentPage: {
      handler(page) {
        this.$store.dispatch('fetchCharacters', page)
      },
      immediate: true
    }
  }
}
</script>
