import PostContainer from "./components/PostContainer";
import "./App.css";
import PostContainer2 from "./components/PostContainer2";

const App = () => {
  // const dispatch = useAppDispatch();

  // вытаскиваю необходимые данные из состояния

  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // реализовываю получение пользователей для этого нужно за dispatch нужный action

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  // визуальное отображение пользователей с помощью JSON.stringify выведем массив пользователей на экран
  return (
    <div className="App">
      {/* {isLoading && <h1>Идёт загрузка ...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
      <div style={{display:'flex'}}>
      <PostContainer />
      <PostContainer2/>
      </div>
    </div>
  );
};

export default App;
