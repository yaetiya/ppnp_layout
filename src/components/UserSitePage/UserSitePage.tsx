import { Container } from '@material-ui/core'
import React from 'react'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import GroupSection from '../GroupSection/GroupSection'
import ParagraphText from '../ParagraphText/ParagraphText'
import PriceList from '../PriceList/PriceList'
import UserHeader from '../UserHeader/UserHeader'

const UserSitePage = () => {
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
    )
}

export default UserSitePage
