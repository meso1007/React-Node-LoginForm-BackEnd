import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Compo/Header";
import Footer from "./Compo/Footer";
import ProductList from "./Compo/ProductList";
import Content from "./Compo/Content";
import Gallery from "./Compo/Gallery";
import Services from "./Compo/Services";
import DownloadApp from "./Compo/DownloadApp";
import acne from "./Data/pro1";
import gentle from "./Data/pro2";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ProductList
          className="flex-grow"
          title="New in: handpicked daily from the world's best brands and boutiques"
          products={acne}
        />
        <Content
          imgRight={false}
          isButton={true}
          imageUrl="./assets/big/big-pic1.jpeg"
          title="Go All Out"
          description={
            <>
              Party-season looks to crack the dress code? Look no further than{" "}
              <br />
              Versace and more
            </>
          }
        />
        <Content
          imgRight={false}
          isButton={false}
          imageUrl="./assets/big/big-pic2.jpeg"
          title=""
          description=""
        />
        <ProductList
          className="flex-grow"
          title="GENTLE MONSTER"
          products={gentle}
        />
        <Gallery />
        <Services />
        <DownloadApp />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
