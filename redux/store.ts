import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";


import articleReducer from  "./Slices/articleSlice";
export const store = configureStore({
  reducer: {
 
    articles: articleReducer
  },
 
}
);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
