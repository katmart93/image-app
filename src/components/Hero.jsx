// components
import Container from "./Container";
import Search from "./Search";
import Card from "./Card";

export default function Hero({ inputVal, setInputVal, handleSearch, images }) {
  return (
    <section className="hero">
      <Search
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSearch={handleSearch}
      />
      <Container>
        <Card images={images} />
        <div className="btnContainer">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </Container>
    </section>
  );
}
