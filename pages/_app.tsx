import "../styles.css";
import "../mystyle.css";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
require('typeface-permanent-marker');

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <Component {...pageProps} />
    </TinaProvider>
  );
};

export default App;
