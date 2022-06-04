// асинхронный actionCreator - тут сразу не возвращаю новый экшен ,а возвращаю функция которая аргументом примет dispatch и уже из этой функции буду производить асинхронные действия

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./userSlice";

// тут обработал все необходимые состояния
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// };

// rejectWithValue которую получим в thunkAPI- это второй аргумент этого callback, который передал вторым аргументом в createAsyncThunk-туда передаю уже какое-то сообщение с ошибкой

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
