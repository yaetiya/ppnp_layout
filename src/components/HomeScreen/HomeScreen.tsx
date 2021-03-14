import { Box, Container, Typography } from "@material-ui/core";
import TopNavbar from "./components/TopNavbar";
import LandingSection from "./components/LandingSection";
import { theme } from "../../theme";
import CreateAccoutButton from "./components/CreateAccoutButton";
import { Parallax } from "react-parallax";

const HomeScreen = () => {
  return (
    <div style={{ backgroundColor: theme.palette.primary.dark }}>
      <Container maxWidth="xl">
        <Parallax
          blur={{ min: -15, max: 13 }}
          bgImage={"./assets/Laptop.png"}
          bgImageAlt="Laptop"
          strength={600}
          bgImageStyle={{
            height: "260px",
            maxWidth: "260px",
            left: 1110,
            top: 520,
          }}
        >
          <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={"./assets/Clock.png"}
            bgImageAlt="Clock"
            strength={400}
            bgImageStyle={{
              height: "210px",
              left: 1310,
              top: 250,
            }}
          >
            <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={"./assets/Wallet.png"}
              bgImageAlt="Wallet"
              strength={400}
              bgImageStyle={{
                height: "150px",
                width: "150px",
                left: 110,
                top: 250,
              }}
            >
              <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={"./assets/laptop2.png"}
                bgImageAlt="Lpt"
                strength={300}
                bgImageStyle={{
                  height: "150px",
                  width: "150px",
                  left: 110,
                  top: 550,
                }}
              >
                <Parallax
                  blur={{ min: -15, max: 15 }}
                  bgImage={"./assets/Card.png"}
                  bgImageAlt="Card"
                  strength={200}
                  bgImageStyle={{
                    height: "150px",
                    width: "150px",
                    left: 810,
                    top: 50,
                  }}
                >
                  <TopNavbar />
                  <header
                    style={{
                      textAlign: "center",
                      width: "100%",
                      marginTop: 100,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      style={{ fontWeight: 500, color: "#FFF", fontSize: 24 }}
                    >
                      by PPnP.me
                    </Typography>
                    <Typography
                      variant="h1"
                      style={{
                        fontWeight: "bold",
                        color: "#FFF",
                        marginTop: 48,
                        fontSize: 90,
                        lineHeight: "100%",
                      }}
                    >
                      Бесплатный сервис <br />
                      для продвижения самозанятых
                    </Typography>
                    <Box marginTop={11}>
                      <CreateAccoutButton />
                    </Box>

                    <Box
                      marginTop={8}
                      marginBottom={5}
                      width="100%"
                      textAlign="center"
                    >
                      <div
                        style={{
                          display: "flex",
                          marginTop: 94,
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          style={{
                            fontWeight: 700,
                            color: "#FFF",
                            fontSize: 24,
                            marginRight: 12,
                          }}
                        >
                          Что это такое?
                        </Typography>
                        <img
                          src="./assets/bottomArrow.svg"
                          alt="bottom-arrow"
                        />
                      </div>
                    </Box>
                  </header>
                  <LandingSection
                    headline={`Свой сайт
          за 5 простых действий`}
                    text="Даже если вы не программист"
                    leftPartW={8}
                    rightPartW={4}
                  >
                    <Box position="relative">
                      <Box position="absolute" style={{ left: 60, top: 0 }}>
                        <img src="./assets/site-v.png" alt="site-v" />
                      </Box>
                      <Box
                        position="absolute"
                        style={{ left: -180, top: -160 }}
                      >
                        <img src="./assets/site-p.png" alt="site-p" />
                      </Box>
                    </Box>
                  </LandingSection>
                </Parallax>
              </Parallax>
            </Parallax>
          </Parallax>
        </Parallax>
      </Container>

      <LandingSection
        headline={`Визитки для своей\nдеятельности`}
        text="Даже если вы не дизайнер"
        leftPartW={6}
        rightPartW={6}
        isLeftText={false}
      >
        <Box position="relative">
          <Box position="absolute">
            <img src="./assets/v-card3.png" alt="v-card3" />
          </Box>
          <Box position="absolute" style={{ left: 87, top: 40 }}>
            <img src="./assets/v-card2.png" alt="v-card2" />
          </Box>
          <Box position="absolute" style={{ left: 194, top: 108 }}>
            <img src="./assets/v-card1.png" alt="v-card1" />
          </Box>
        </Box>
      </LandingSection>
      <LandingSection
        headline={`Удобный учёт клиентов,
        платежей, заявок`}
        text="Даже если ты не бухгалтер"
        leftPartW={8}
        rightPartW={4}
      >
        <Box position="relative">
          <Box position="absolute" style={{ right: 0, top: -20 }}>
            <img src="./assets/plus.png" alt="plus" />
          </Box>
        </Box>
      </LandingSection>
      <LandingSection
        headline={`Поток клиентов
        с нашего маркетплейса`}
        text="Даже если ты не маркетолог"
        leftPartW={4}
        rightPartW={8}
        isLeftText={false}
      >
        <Box position="relative">
          <Box position="absolute" style={{ left: 0, top: -80 }}>
            <img src="./assets/rect-cards.png" alt="rect-cards" />
          </Box>
        </Box>
      </LandingSection>
      <LandingSection
        headline={`Работа “в белую”
        и официальный статус
        самозанятого`}
        text="Даже если вы не юрист"
        leftPartW={8}
        rightPartW={4}
      >
        <Box position="relative">
          <Box position="absolute" style={{ right: 0, top: 0 }}>
            <img src="./assets/grayToLight.png" alt="grayToLight" />
          </Box>
        </Box>
      </LandingSection>
      <Box marginTop={11} paddingBottom={7} textAlign="center">
        <CreateAccoutButton />
      </Box>
    </div>
  );
};

export default HomeScreen;
