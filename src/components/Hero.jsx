// components
import Container from "./Container";
import Search from "./Search";
import Card from "./Card";

export default function Hero({
  inputVal,
  setInputVal,
  handleSearch,
  images,
  newImages,
}) {
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
          <button onClick={() => newImages("previous")}>Previous</button>
          <button onClick={() => newImages("next")}>Next</button>
        </div>
      </Container>
    </section>
  );
}
