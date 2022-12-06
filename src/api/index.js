import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { "Access-Control-Allow-Origin": "*" }
})

export const createDeck = async (data) => {
    console.log("creating deck")
    return await instance({
        url: `/decks`,
        method: 'POST',
        data: data,
    }).then((res) => {
        console.log("Deck create success!")
        console.log(res.data)
        return true
    }).catch((err) => {
        console.log(err.message)
        return false
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