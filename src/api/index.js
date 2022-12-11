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
    return await instance({
        url: `/decks`,
        method: 'GET'
    }).then((res) => {
        console.log("completed")
        console.log(res.data)
        return res.data
    }).catch((err) => {
        console.log("error")
        return false
    })
}

export const getDeck = async (_id) => {
    console.log("getDeck")
    return await instance({
        url: `/decks/${_id}`,
        method: 'GET'
    }).then((res) => {
        console.log(("completed"))
        if (res.data !== "") {
            console.log(res.data)
            return res.data
        } else {
            console.log("not found")
            return false;
        }

    }).catch((err) => {
        console.log("error")
        return false
    })
}
export const updateDeck = async (data) => {
    return await instance({
        url: `/decks/${data._id}`,
        method: 'PATCH',
        data: data,
    }).then((res) => {
        console.log(res.data)
        console.log("completed")
        return true
    }).catch((err) => {
        console.log("error")
        return false
    })
}

export const deleteDeck = async (_id) => {
    await instance({
        url: `/decks/${_id}`,
        method: 'DELETE'
    }).then((res) => {
        console.log(res.data)
        console.log("completed")
    }).catch((err) => {
        console.log("error")
    })
}