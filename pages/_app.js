import { calibre } from "public/fonts";
import Meta from "@/components/Meta/Meta";
import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Meta />
      <div
        className={`${calibre.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
