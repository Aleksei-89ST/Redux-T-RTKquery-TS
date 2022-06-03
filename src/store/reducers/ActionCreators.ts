// асинхронный actionCreator - тут сразу не возвращаю новый экшен ,а возвращаю функция которая аргументом примет dispatch и уже из этой функции буду производить асинхронные действия

import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./useSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching());
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(userSlice.actions.usersFetchingSuccess(response.data));
  } catch (e) {
    dispatch(userSlice.actions.usersFetchingError(e.message));
  }
};
