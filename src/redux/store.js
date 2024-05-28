import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
// import createTransform from "redux-persist/es/createTransform";
// const arrayTransform = createTransform(
//   (items) => items,
//   (items) => (Array.isArray(items) ? items : []),
//   { whitelist: ["items"] }
// );
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  items: persistReducer(persistConfig, contactReducer),
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
