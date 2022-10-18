import type { NextPage } from "next";
import Image from "next/image";
import heartSVG from "../public/heart.svg";
import styled from "@emotion/styled";
import React from "react";

type CountryProps = {
  country: Country;
};

const Country = ({ country }: CountryProps) => {
  const { name, flag, capital } = country;
  return (
    <StyledCountry>
      <StyledFlag>{flag}</StyledFlag>
      <StyledName>{name.official}</StyledName>
      <StyledCapital>{capital[0]}</StyledCapital>
      <Image src={heartSVG} />
    </StyledCountry>
  );
};

export default Country;

const StyledCountry = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // backgroundColor: theme.colors.primary,
}));

const StyledFlag = styled.p``;
const StyledName = styled.p``;
const StyledCapital = styled.p``;
