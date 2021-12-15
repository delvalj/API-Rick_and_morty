import {createStore} from 'vuex'

export default createStore({

    state: {
        characters: [],
        charactersFilter: [],
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

        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
            state.tokenExpiration = payload.tokenExpiration;
        }
    },
    actions: {
        filterByStatus({commit, state}, status) {
            const results = state.characters.filter((character) => {
                return character.status.includes(status)
            })
            commit('setCharactersFilter', results)
        },

        filterByName({commit, state}, name) {
            const formatName = name.toLowerCase()
            const results = state.characters.filter((character) => {
                const characterName = character.name.toLowerCase()

                if (characterName.includes(formatName)) {
                    return character
                }
            })
            commit('setCharactersFilter', results)
        },

        async getCharacters({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=32")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage2({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=19")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage3({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=13")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage4({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=23")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage5({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=33")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage6({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=3")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage7({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=27")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage8({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=39")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage9({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=41")
                const data = await response.json()
                console.log(data)
                commit('setCharacters', data.results)
                commit('setCharactersFilter', data.results)
            } catch (error) {
                console.error(error)
            }
        },

        async getCharactersPage10({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=42")
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


        async login(context, payload) {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAuCh3LuY25Rf-ZXWy2thACETJtA9lIHDQ',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: payload.email,
                        password: payload.password,
                        returnSecureToken: true
                    })
                });

            const responseData = await response.json();

            if (!response.ok) {
                console.log(responseData);
                const error = new Error(responseData.message || 'Failed to Auth');
                throw error;
            }

            console.log(responseData);
            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId,
                tokenExpiration: responseData.expiresIn,
                registered: responseData.registered
            })

        },
        async signup(context, payload) {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAuCh3LuY25Rf-ZXWy2thACETJtA9lIHDQ',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: payload.email,
                        password: payload.password,
                        returnSecureToken: true
                    })
                });

            const responseData = await response.json();

            if (!response.ok) {
                console.log(responseData);
                const error = new Error(responseData.message || 'Failed to Auth');
                throw error;
            }
            console.log(responseData);

            context.commit('setUser', {
                token: responseData.idToken,
                userId: responseData.localId,
                tokenExpiration: responseData.expiresIn,

            })
        },

    },

    getters: {},
});

