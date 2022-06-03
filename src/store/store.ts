import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from './reducers/useSlice'

const rootReducer = combineReducers({
userReducer
})
// конфигурация store
export const setupStore = () => {
    return configureStore({
        reducer:rootReducer
    })
}
// типы для взаимодействия с нашим хранилищем 1.тип нашего состояния 2.самого стора 3.тип dispatch нашего хранилища
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']