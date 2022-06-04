import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

// обычный useDispatch только уже с типизацией
export const useAppDispatch = () => useDispatch<AppDispatch>();  
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;