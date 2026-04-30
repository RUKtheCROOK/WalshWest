export type ContractSpec = {
  symbol: string;
  name: string;
  size: number;
  unit: string;
  priceUnit: string;
  group: "Grains" | "Oilseeds" | "Livestock" | "Energy" | "Metals";
};

export const CONTRACTS: ContractSpec[] = [
  { symbol: "ZC", name: "Corn", size: 5000, unit: "bu", priceUnit: "$/bu", group: "Grains" },
  { symbol: "ZW", name: "Wheat (Chicago SRW)", size: 5000, unit: "bu", priceUnit: "$/bu", group: "Grains" },
  { symbol: "ZS", name: "Soybeans", size: 5000, unit: "bu", priceUnit: "$/bu", group: "Oilseeds" },
  { symbol: "ZM", name: "Soybean Meal", size: 100, unit: "tons", priceUnit: "$/ton", group: "Oilseeds" },
  { symbol: "ZL", name: "Soybean Oil", size: 60000, unit: "lbs", priceUnit: "¢/lb", group: "Oilseeds" },
  { symbol: "LE", name: "Live Cattle", size: 40000, unit: "lbs", priceUnit: "¢/lb", group: "Livestock" },
  { symbol: "HE", name: "Lean Hogs", size: 40000, unit: "lbs", priceUnit: "¢/lb", group: "Livestock" },
  { symbol: "CL", name: "Crude Oil (WTI)", size: 1000, unit: "barrels", priceUnit: "$/bbl", group: "Energy" },
  { symbol: "NG", name: "Natural Gas (Henry Hub)", size: 10000, unit: "MMBtu", priceUnit: "$/MMBtu", group: "Energy" },
  { symbol: "GC", name: "Gold", size: 100, unit: "troy oz", priceUnit: "$/oz", group: "Metals" },
];

export function getContract(symbol: string): ContractSpec | undefined {
  return CONTRACTS.find((c) => c.symbol === symbol);
}
