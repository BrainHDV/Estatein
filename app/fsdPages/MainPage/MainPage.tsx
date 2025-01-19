import Grid from "@containers/Grid/Grid";
import "./MainPage.scss";
import MainHeroImg from "@assets/building.png";
import Image from "next/image";
import CustomLink from "@components/CustomLink/CustomLink";
import Statistics from "@components/Statistics/Statistics";
import {
  HomeFeatureIcon,
  HousesFeatureIcon,
  SunFeatureIcon,
  UnlockFeatureIcon,
} from "@assets/index";
import FeatureLinksStack from "@components/FeatureLinksStack/FeatureLinksStack";

const statisticsData = [
  {
    title: "200+",
    subtitle: "Happy Customers",
  },
  {
    title: "10k+",
    subtitle: "Properties For Clients",
  },
  {
    title: "16+",
    subtitle: "Years of Experience",
  },
];

const featureLinksData = [
  {
    icon: <HomeFeatureIcon />,
    label: "Find Your Dream Home",
  },
  {
    icon: <UnlockFeatureIcon />,
    label: "Unlock Property Value",
  },
  {
    icon: <HousesFeatureIcon />,
    label: "Effortless Property Management",
  },
  {
    icon: <SunFeatureIcon />,
    label: "Smart Investments, Informed Decisions",
  },
];

const MainPage = () => {
  return (
    <main>
      <Grid mode="full">
        <Grid mode="content">
          <section className="main-page__hero-content">
            <article className="hero-content">
              <div className="hero-content__inner">
                <div className="hero-content__text">
                  <h1>Discover Your Dream Property with Estatein</h1>
                  <p>
                    Your journey to finding the perfect property begins here.
                    Explore our listings to find the home that matches your
                    dreams.
                  </p>
                </div>

                <div className="btns">
                  <CustomLink href="#" variant="outlined" color="secondary">
                    Learn More
                  </CustomLink>
                  <CustomLink href="#" variant="contained" color="primary">
                    Browse Properties
                  </CustomLink>
                </div>

                <Statistics data={statisticsData} />
              </div>
            </article>
            <div className="hero-image">
              <Image src={MainHeroImg} alt="building hero image" />
            </div>
          </section>
        </Grid>
        <FeatureLinksStack data={featureLinksData} />
      </Grid>

      <div style={{ maxWidth: "250px", padding: "20px 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        mollitia ullam aut corrupti nihil asperiores sed pariatur eos, deserunt
        tempora nemo incidunt aliquid deleniti odit voluptatibus animi
        temporibus fuga nam quos magnam. Sequi cupiditate placeat obcaecati
        quia, nisi, cum at ullam optio nihil libero autem ratione! Magnam
        repellendus ratione laboriosam, dicta iusto corporis laudantium,
        aperiam, inventore vero accusantium obcaecati facilis? Sit cupiditate,
        sunt officiis animi tenetur vero qui officia hic est ipsum distinctio
        eos odit. Voluptates assumenda fuga voluptatibus, ducimus libero placeat
        eligendi! Fuga id rem saepe, quam quos quod alias tempora animi, maiores
        debitis assumenda, nobis voluptatem nam iste. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Distinctio mollitia ullam aut corrupti
        nihil asperiores sed pariatur eos, deserunt tempora nemo incidunt
        aliquid deleniti odit voluptatibus animi temporibus fuga nam quos
        magnam. Sequi cupiditate placeat obcaecati quia, nisi, cum at ullam
        optio nihil libero autem ratione! Magnam repellendus ratione laboriosam,
        dicta iusto corporis laudantium, aperiam, inventore vero accusantium
        obcaecati facilis? Sit cupiditate, sunt officiis animi tenetur vero qui
        officia hic est ipsum distinctio eos odit. Voluptates assumenda fuga
        voluptatibus, ducimus libero placeat eligendi! Fuga id rem saepe, quam
        quos quod alias tempora animi, maiores debitis assumenda, nobis
        voluptatem nam iste.
      </div>
    </main>
  );
};

export default MainPage;
