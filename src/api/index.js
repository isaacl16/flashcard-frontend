import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:8080'
})

export const createDeck = async () => {
    console.log("creating deck")
    await instance({
        url: `/decks`,
        method: 'POST'
    }).then((res) => {
        console.log("completed")
        console.log(res.data)
    }).catch((err) => {
        console.log("error")
    })
}

export const getDecks = async () => {
    console.log("getDecks")
    await instance({
        url: `/decks`,
        method: 'GET'
    }).then((res) => {
        console.log("completed")
        console.log(res.data)
    }).catch((err) => {
        console.log("error")
    })
}

export const getDeck = async (id) => {
    console.log("getDeck")
    await instance({
        url: `/decks/{id}`,
        method: 'GET'
    }).then((res) => {
        console.log("completed")
    }).catch((err) => {
        console.log("error")
    })
}
export const updateDeck = async (id) => {
    await instance({
        url: `/decks/{id}`,
        method: 'PUT'
    }).then((res) => {
        console.log(res.data)
        console.log("completed")
    }).catch((err) => {
        console.log("error")
    })
}

export const deleteDeck = async (id) => {
    await instance({
        url: `/decks/{id}`,
        method: 'DELETE'
    }).then((res) => {
        console.log(res.data)
        console.log("completed")
    }).catch((err) => {
        console.log("error")
    })
}