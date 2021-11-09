import {createStore} from 'vuex'

export default createStore({
    state: {
        characters: [],
        charactersFilter: [],
        locations: [],
        locationsFilter: []
    },
    mutations: {
        setCharacters(state, payload) {
            state.characters = payload
        },
        setCharactersFilter(state, payload) {
            state.charactersFilter = payload
        },
        setLocations(state, payload) {
            state.locations = payload
        },
        setLocationsFilter(state, payload) {
            state.locationsFilter = payload
        },

    },
    actions: {
        async getCharacters({commit}) {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character?page=13')
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },
        async getLocations({commit}) {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/location')
                const data = await response.json()
                console.log(data)
                commit('setLocations', data.results)
                commit('setLocationsFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },


    },


    getters: {},
});

