import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import MovieCards from "../../components/MovieCards/MovieCards"
import Footer from "../../components/Footer/Footer"


const Home = () => {
  return (
    <>
      <Header />
      <Carousel/>
      <MovieCards/>
      <Footer />
    </>
  );
}

export default Home;
