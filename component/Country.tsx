import type { NextPage } from "next";
import React from "react";

type CountryProps = {
  country: Country;
};

const Country = ({ country }: CountryProps) => {
  const { name, flag, capital } = country;
  return (
    <div>
      {flag}
      <p>{name.official}</p>
      <p>{capital[0]}</p>
    </div>
  );
};

export default Country;
