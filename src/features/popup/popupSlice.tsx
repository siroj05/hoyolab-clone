import { createSlice } from "@reduxjs/toolkit";

const IsPopupOpenSlice = createSlice({
  name : 'isOpenPopup',
  initialState : false,
  reducers : {
    openPopup: () => true,
    closePopup: () => false,
    togglePopup: (state) => !state
  }
})

export const { openPopup, closePopup, togglePopup} = IsPopupOpenSlice.actions
export default IsPopupOpenSlice.reducer