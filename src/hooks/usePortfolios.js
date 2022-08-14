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

  function pushSymbol(id, symbol) {
    const nextPortfolios = portfolios.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          coins: [
            ...item.coins,
            { id: nanoid(), name: "", symbol, price: 0, percentChange24h: 0 },
          ],
        };
      }
      return item;
    });
    setPortfolios(nextPortfolios);
  }

  function getSymbols() {
    return portfolios.map((item) => item.coins.map((coin) => coin.symbol));
  }

  return { portfolios, setPortfolios, push, pushSymbol, getSymbols };
}

export default usePortfolios;
