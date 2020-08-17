import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from '@/api/index'
import {CHARACTERS_BY_PAGE} from '@/api/routes'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: {},
    pages: 0
  },
  mutations: {
    setCharacters(state, {page, characters}) {
      state.characters[page] = characters 
    },
    setPages(state, pages) {
      state.pages = pages
    }
  },
  actions: {
    fetchCharacters({state, commit}, page) {
      const pageCharacters = state.characters[page]
      if(pageCharacters) {
        return Promise.resolve(pageCharacters)
      }
      return axiosInstance.get(CHARACTERS_BY_PAGE(page))
      .then(({data}) => {
        const {info, results} = data  
        commit('setCharacters', {page, characters: results})
        commit('setPages', info.pages)
      })
      .catch(err => console.log(err))
    }
  },
  getters: {
    getCharacterById: (state) => ({page, id}) => {
      const pageCharacters = state.characters[page]
      if(pageCharacters) {
         return pageCharacters.find(char => char.id === id)
      }
      return null
    },
    getCharacterByPage: (state) => (page) => {
      const pageCharacters = state.characters[page]
      return pageCharacters;
      }
  }
})
