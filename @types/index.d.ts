export {};

declare global {
  type Country = {
    capital: string[];
    flag: string;
    name: {
      official: string;
      common: string;
    };
  };
}
