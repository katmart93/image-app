import Container from "./Container";
import Search from "./Search";

export default function Hero({ inputVal, setInputVal }) {
  return (
    <section className="hero">
      <Search inputVal={inputVal} setInputVal={setInputVal} />
      <Container></Container>
    </section>
  );
}
