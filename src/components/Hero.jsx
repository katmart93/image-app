import Container from "./Container";
import Search from "./Search";

export default function Hero({ inputVal, setInputVal, handleSearch }) {
  return (
    <section className="hero">
      <Search
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleSearch={handleSearch}
      />
      <Container></Container>
    </section>
  );
}
