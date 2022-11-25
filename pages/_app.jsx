import "../styles/globals.css";
import Header from "../components/header";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-screen-xl w-full my-0 mx-auto my-3 border-2 border-lime-600 max-h-99">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
