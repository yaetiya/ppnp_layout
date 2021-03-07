import { Container } from "@material-ui/core";
import Footer from "./components/Footer/Footer";
import GroupSection from "./components/GroupSection/GroupSection";
import ParagraphText from "./components/ParagraphText/ParagraphText";
import PriceList from "./components/PriceList/PriceList";
import UserHeader from "./components/UserHeader/UserHeader";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <Container>
      <UserHeader />
      <GroupSection headline="Обо мне">
        <ParagraphText
          text="Приготовлю торт на Ваш праздник и для вкусного домашнего чаепития!
          Использую только натуральные и качественные ингридиенты: Мука в/с
          известных производителей, сахар, сливочное масло 82,5 %, куриные яйца,
          молоко 2,5%, натуральная ваниль, Сливки натуральные 33%, сливочный
          сыр, орехи, ягоды и фрукты замороженные, свежие."
        />
      </GroupSection>
      <PriceList />
      <Gallery />
      <Footer />
    </Container>
  );
}

export default App;
