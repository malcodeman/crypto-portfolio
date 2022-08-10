import { useLocalStorageValue } from "@react-hookz/web";
import { nanoid } from "nanoid";

const defaultValue = [
  {
    id: nanoid(),
    name: "New portfolio",
    coins: [
      { id: nanoid(), name: "", symbol: "BTC", price: 0, percentChange24h: 0 },
      { id: nanoid(), name: "", symbol: "ETH", price: 0, percentChange24h: 0 },
      { id: nanoid(), name: "", symbol: "NGC", price: 0, percentChange24h: 0 },
    ],
  },
  {
    id: nanoid(),
    name: "To the moon",
    coins: [
      { id: nanoid(), name: "", symbol: "BTC", price: 0, percentChange24h: 0 },
      { id: nanoid(), name: "", symbol: "LTC", price: 0, percentChange24h: 0 },
    ],
  },
];

function usePortfolios() {
  const [portfolios, setPortfolios] = useLocalStorageValue(
    "portfolios",
    defaultValue
  );

  function push(nextPortfolio) {
    setPortfolios([...portfolios, nextPortfolio]);
  }

  return { portfolios, setPortfolios, push };
}

export default usePortfolios;
