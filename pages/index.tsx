import type { NextPage } from "next";
import { NextPageContext } from "next";
import Country from "../component/Country";
import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// https://www.youtube.com/watch?v=v8o9iJU5hEA
// https://restcountries.com/#api-endpoints-v3-all

type HomeProps = {
  countries: Country[];
};

const Home: NextPage<HomeProps> = ({ countries }) => {
  return (
    <StyledHome>
      {countries.map((country) => (
        <Country country={country} key={country.name.official} />
      ))}
    </StyledHome>
  );
};

// 빌드할때 실행됨
export async function getStaticProps(context: NextPageContext) {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return { props: { countries: countries.slice(0, 20) } };
}

export default Home;

const StyledHome = styled("div")(({ theme }) => ({
  backgroundColor: theme.colors.secondary,
}));
