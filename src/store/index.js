import {createStore} from 'vuex'

export default createStore({

    state: {
        //Sign Up
        userId: null,
        token: null,
        tokenExpiration: null,

        //Login
        registered: null,

        // RM characters
        characters: [],
        charactersFilter: [],
        locations: [],
        locationsFilter: [],
        users: [],
        usersFilter: [],
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

        //USERS

        // setUsers(state, payload) {
        //     state.users = payload
        // },

        // setUsersFilter(state, payload) {
        //     state.usersFilter = payload
        // },

        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
            state.tokenExpiration = payload.tokenExpiration;
        }
    },
    actions: {
        async getCharacters({commit}) {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/?page=12")
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

        // async getUsers({commit}) {
        //     try {
        //         const response = await fetch('https://reqres.in/api/users?page=' + param)
        //         const data = await response.json()
        //         console.log(data)
        //         commit('setUsers', data.data)
        //         commit('setUsersFilter', data.data)
        //
        //     } catch (error) {
        //         console.error(error)
        //     }
        // },

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

