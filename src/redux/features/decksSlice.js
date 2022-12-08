import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    decks: []
}
export const decksSlice = createSlice({
    name: 'decks',
    initialState,
    reducers: {
        setDeckName: (state, action) => {
            state.deckName = action.payload.deckName
        },
        updateCard: (state, action) => {
            const index = action.payload.cardIndex
            state.cards[index].frontText = action.payload.frontText
            state.cards[index].backText = action.payload.backText
        },
        addCard: (state, action) => {
            state.cards.push({
                frontText: action.payload.frontText,
                backText: action.payload.backText
            })
        },
        removeCard: (state, action) => {
            state.cards.splice(action.payload.index)
        }
    },
    extraReducers: {

    },
})


export const { setDeckName, updateCard, addCard, deleteCard } = decksSlice.actions

export default decksSlice.reducer