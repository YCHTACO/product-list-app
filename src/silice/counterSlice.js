import { createSlice } from '@reduxjs/toolkit'

const updateDataToLocalStorage = (value) => {
    window.localStorage.setItem("conter",value);
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: parseInt(window.localStorage.getItem("conter")) || 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
      updateDataToLocalStorage(state.value); 
    },
    decrement: (state) => {
      state.value -= 1
      updateDataToLocalStorage(state.value);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      updateDataToLocalStorage(state.value);
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer