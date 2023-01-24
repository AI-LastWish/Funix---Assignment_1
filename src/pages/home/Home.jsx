import Stays from "../../components/Stays";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Stays />
      <Footer />
    </div>
  );
};

export default Home;
