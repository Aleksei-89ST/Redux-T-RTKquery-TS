import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { postAPI } from "../services/PostService";
import userReducer from './reducers/userSlice'

// сосдаю корневой редусер - обьеденяет все редусеры в один
const rootReducer = combineReducers({
userReducer,
 // RTK query тут Регистрирую новый редусер
[postAPI.reducerPath]: postAPI.reducer
})
// конфигурация store
export const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
//  RTK query тут добавляю медлвеар из postAPI
middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
    })
}
// типы для взаимодействия с нашим хранилищем 1.тип нашего состояния 2.самого стора 3.тип dispatch нашего хранилища
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']