import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

// указываю что reducer будет работать с состоянием userState
interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

// создаю обьект и указываю что он типа UserState
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
};

//создаю сам reducer(который slice) специальной функцией createSlice - параметром принимают обьект с опциями
//поле где reducers- аналогично switch case,тоесть каждый case идёт как отдельный reducer.И внутри него буду определять как изменить состояние

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersFetching(state) {
      state.isLoading = true;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = "";
      state.users = action.payload;
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// вытаскиваю отдельно reducer и action-creators и экспорт по default
export default userSlice.reducer;
