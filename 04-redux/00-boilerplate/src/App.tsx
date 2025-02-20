import { compose, createStore } from "redux";
import "./App.css";
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";
import { UserProfileContainer } from "./user-profile";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

function App() {
  return (
    <>
      <Provider store={store}>
        <header>Redux 2023 - Boilerplate</header>
        <main>
          <UserProfileContainer />
        </main>
      </Provider>
    </>
  );
}

export default App;
