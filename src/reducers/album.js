import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  id: null,
  color: '',
}

export const album = createSlice({
  name: 'album',
  initialState,
  reducers: {
    updateAlbumId: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id = action.payload
    },
    updateAlbumColor: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.color = action.payload
      },
    // decrement: (state) => {
    //   state.value -= 1
    //},
  },
})

// Action creators are generated for each case reducer function
export const { /* decrement,*/ updateAlbumId, updateAlbumColor } = album.actions

export default album.reducer