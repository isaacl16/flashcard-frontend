import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deckName: "",
    cards: [],
}
export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        setDeckName: (state, action) => {
            state.deckName = action.payload.deckName
        },
        setCards: (state, action) => {
            state.cards = action.payload.cards
        },
        addCard: (state, action) => {
            state.cards.push(action.payload.card)
        }
    },
    extraReducers: {

    },
})


export const { setDeckName, setCards, addCard } = deckSlice.actions

export default deckSlice.reducer