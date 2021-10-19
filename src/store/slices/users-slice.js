import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    totalPages: 0,
    currentPage: 1,
    skipNum: 0,
    itemsPerPage: [],
    showItemsCount: 10,
    selectedCheckbox: [],
  },
  reducers: {
    getUsers(state, action) {
      state.users = [...state.users, ...action.payload];
      state.totalPages = Math.trunc(state.users.length / state.showItemsCount);
      while (state.users.length) {
        state.itemsPerPage.push(state.users.splice(0, state.showItemsCount));
      }
      state.users = action.payload;
    },
    paginate(state, action) {
      state.currentPage = action.payload;
    },
    removeItems(state, action) {
      let itemsId = action.payload;
      state.users = state.users.filter((item) => !itemsId.includes(item.id));
      // state.totalPages = Math.trunc(state.users.length / state.showItemsCount);
      // while (state.users.length) {
      //   state.itemsPerPage.push(state.users.splice(0, state.showItemsCount));
      // }
      state.selectedCheckbox = [];
    },
    selectCheckbox(state, action) {
      state.selectedCheckbox = [...state.selectedCheckbox, action.payload];
    },
    unSelectCheckbox(state, action) {
      state.selectedCheckbox = state.selectedCheckbox.filter(
        (item) => action.payload !== item
      );
    },
  },
});

export const {
  getUsers,
  paginate,
  removeItems,
  selectCheckbox,
  unSelectCheckbox,
} = userSlice.actions;

export default userSlice.reducer;
