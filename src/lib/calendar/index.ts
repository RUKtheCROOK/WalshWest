export type MarketEventCategory =
  | "Agriculture"
  | "Monetary Policy"
  | "Energy"
  | "Economic"
  | "Markets"
  | "Walsh West";

export type MarketEvent = {
  id: string;
  title: string;
  publisher: string;
  category: MarketEventCategory;
  description: string;
  date: Date;
  time?: string;
  cadence?: string;
  link?: string;
  tentative?: boolean;
};

export type RecurringRelease = {
  id: string;
  title: string;
  publisher: string;
  category: MarketEventCategory;
  cadence: string;
  description: string;
  link?: string;
};

export const RECURRING_RELEASES: RecurringRelease[] = [
  {
    id: "crop-progress",
    title: "Crop Progress",
    publisher: "USDA / NASS",
    category: "Agriculture",
    cadence: "Every Monday · 4:00 p.m. ET · April through November",
    description:
      "Weekly planting, fruiting, and harvest progress, plus condition ratings for corn, cotton, sorghum, soybeans, rice, spring wheat, peanuts, barley, oats, and winter wheat.",
    link: "https://esmis.nal.usda.gov/publication/crop-progress",
  },
  {
    id: "petroleum-weekly",
    title: "Weekly Petroleum Status Report",
    publisher: "EIA",
    category: "Energy",
    cadence: "Every Wednesday · 10:30 a.m. ET (Thursday after Monday holidays)",
    description:
      "Weekly U.S. petroleum supply, inventories, imports, and refinery operations.",
    link: "https://www.eia.gov/petroleum/supply/weekly/schedule.php",
  },
  {
    id: "natgas-weekly",
    title: "Weekly Natural Gas Storage Report",
    publisher: "EIA",
    category: "Energy",
    cadence: "Every Thursday · 10:30 a.m. ET",
    description:
      "Weekly U.S. natural gas in underground storage.",
    link: "https://ir.eia.gov/ngs/schedule.html",
  },
  {
    id: "cot",
    title: "Commitments of Traders (COT)",
    publisher: "CFTC",
    category: "Markets",
    cadence: "Every Friday · 3:30 p.m. ET",
    description:
      "Weekly positions held by commercial hedgers, large speculators (managed money), and small traders. Data covers positions as of the prior Tuesday close.",
    link: "https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm",
  },
];

const d = (y: number, m: number, day: number): Date => new Date(y, m - 1, day);

const seed: MarketEvent[] = [
  // ───── USDA / NASS ─────
  { id: "wasde-2026-05", title: "WASDE", publisher: "USDA", category: "Agriculture", description: "Monthly U.S. and world supply and demand estimates for grains, oilseeds, cotton, sugar, livestock, and dairy.", date: d(2026, 5, 12), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://www.usda.gov/oce/commodity/wasde" },
  { id: "wasde-2026-06", title: "WASDE", publisher: "USDA", category: "Agriculture", description: "Monthly U.S. and world supply and demand estimates for grains, oilseeds, cotton, sugar, livestock, and dairy.", date: d(2026, 6, 11), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://www.usda.gov/oce/commodity/wasde" },
  { id: "wasde-2026-07", title: "WASDE", publisher: "USDA", category: "Agriculture", description: "Monthly U.S. and world supply and demand estimates.", date: d(2026, 7, 10), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://www.usda.gov/oce/commodity/wasde" },
  { id: "wasde-2026-08", title: "WASDE", publisher: "USDA", category: "Agriculture", description: "Monthly U.S. and world supply and demand estimates.", date: d(2026, 8, 12), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://www.usda.gov/oce/commodity/wasde" },
  { id: "wasde-2026-09", title: "WASDE", publisher: "USDA", category: "Agriculture", description: "Monthly U.S. and world supply and demand estimates.", date: d(2026, 9, 11), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://www.usda.gov/oce/commodity/wasde" },
  { id: "wasde-2026-10", title: "WASDE", publisher: "USDA", category: "Agriculture", description: "Monthly U.S. and world supply and demand estimates.", date: d(2026, 10, 9), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://www.usda.gov/oce/commodity/wasde" },

  { id: "crop-prod-2026-05", title: "Crop Production", publisher: "USDA", category: "Agriculture", description: "Monthly production forecasts for grains, oilseeds, and cotton. First new-marketing-year supply/demand estimates.", date: d(2026, 5, 12), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/crop-production" },
  { id: "crop-prod-2026-06", title: "Crop Production", publisher: "USDA", category: "Agriculture", description: "Monthly production forecasts for grains, oilseeds, and cotton.", date: d(2026, 6, 11), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/crop-production" },
  { id: "crop-prod-2026-07", title: "Crop Production", publisher: "USDA", category: "Agriculture", description: "Monthly production forecasts for grains, oilseeds, and cotton.", date: d(2026, 7, 10), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/crop-production" },
  { id: "crop-prod-2026-08", title: "Crop Production", publisher: "USDA", category: "Agriculture", description: "Monthly production forecasts. First production estimates for spring-planted crops including corn.", date: d(2026, 8, 12), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/crop-production" },
  { id: "crop-prod-2026-09", title: "Crop Production", publisher: "USDA", category: "Agriculture", description: "Monthly production forecasts for grains, oilseeds, and cotton.", date: d(2026, 9, 11), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/crop-production" },
  { id: "crop-prod-2026-10", title: "Crop Production", publisher: "USDA", category: "Agriculture", description: "Monthly production forecasts for grains, oilseeds, and cotton.", date: d(2026, 10, 9), time: "12:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/crop-production" },

  { id: "grain-stocks-q2", title: "Grain Stocks", publisher: "USDA", category: "Agriculture", description: "Quarterly stocks of wheat, corn, sorghum, oats, barley, soybeans, and other crops as of June 1.", date: d(2026, 6, 30), time: "12:00 p.m. ET", cadence: "Quarterly", link: "https://esmis.nal.usda.gov/publication/grain-stocks" },
  { id: "grain-stocks-q3", title: "Grain Stocks", publisher: "USDA", category: "Agriculture", description: "Quarterly stocks of wheat, corn, sorghum, oats, barley, soybeans, and other crops as of September 1.", date: d(2026, 9, 30), time: "12:00 p.m. ET", cadence: "Quarterly", link: "https://esmis.nal.usda.gov/publication/grain-stocks" },

  { id: "acreage-2026", title: "Acreage", publisher: "USDA", category: "Agriculture", description: "Annual report of planted acreage for principal crops. Follows up on Prospective Plantings.", date: d(2026, 6, 30), time: "12:00 p.m. ET", cadence: "Annual", link: "https://esmis.nal.usda.gov/publication/acreage" },

  { id: "cof-2026-05", title: "Cattle on Feed", publisher: "USDA", category: "Agriculture", description: "Monthly feedlot inventory, placements, marketings, and other disappearance.", date: d(2026, 5, 22), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cattle-feed" },
  { id: "cof-2026-06", title: "Cattle on Feed", publisher: "USDA", category: "Agriculture", description: "Monthly feedlot inventory.", date: d(2026, 6, 18), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cattle-feed" },
  { id: "cof-2026-07", title: "Cattle on Feed", publisher: "USDA", category: "Agriculture", description: "Monthly feedlot inventory.", date: d(2026, 7, 24), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cattle-feed" },
  { id: "cof-2026-08", title: "Cattle on Feed", publisher: "USDA", category: "Agriculture", description: "Monthly feedlot inventory.", date: d(2026, 8, 21), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cattle-feed" },
  { id: "cof-2026-09", title: "Cattle on Feed", publisher: "USDA", category: "Agriculture", description: "Monthly feedlot inventory.", date: d(2026, 9, 18), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cattle-feed" },
  { id: "cof-2026-10", title: "Cattle on Feed", publisher: "USDA", category: "Agriculture", description: "Monthly feedlot inventory.", date: d(2026, 10, 23), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cattle-feed" },

  { id: "cs-2026-05", title: "Cold Storage", publisher: "USDA", category: "Agriculture", description: "Regional and national stocks of meats, dairy, poultry, fruits, nuts, and vegetables in refrigerated warehouses.", date: d(2026, 5, 22), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cold-storage" },
  { id: "cs-2026-06", title: "Cold Storage", publisher: "USDA", category: "Agriculture", description: "Monthly stocks in refrigerated warehouses.", date: d(2026, 6, 25), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cold-storage" },
  { id: "cs-2026-07", title: "Cold Storage", publisher: "USDA", category: "Agriculture", description: "Monthly stocks in refrigerated warehouses.", date: d(2026, 7, 24), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cold-storage" },
  { id: "cs-2026-08", title: "Cold Storage", publisher: "USDA", category: "Agriculture", description: "Monthly stocks in refrigerated warehouses.", date: d(2026, 8, 24), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cold-storage" },
  { id: "cs-2026-09", title: "Cold Storage", publisher: "USDA", category: "Agriculture", description: "Monthly stocks in refrigerated warehouses.", date: d(2026, 9, 25), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cold-storage" },
  { id: "cs-2026-10", title: "Cold Storage", publisher: "USDA", category: "Agriculture", description: "Monthly stocks in refrigerated warehouses.", date: d(2026, 10, 23), time: "3:00 p.m. ET", cadence: "Monthly", link: "https://esmis.nal.usda.gov/publication/cold-storage" },

  // ───── Federal Reserve / FOMC ─────
  { id: "fomc-2026-06", title: "FOMC Meeting (June)", publisher: "Federal Reserve", category: "Monetary Policy", description: "Two-day FOMC meeting (June 16–17). Policy decision and Summary of Economic Projections released on conclusion day.", date: d(2026, 6, 17), time: "2:00 p.m. ET", link: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
  { id: "fomc-mins-2026-07", title: "FOMC Minutes (June meeting)", publisher: "Federal Reserve", category: "Monetary Policy", description: "Minutes from the June 16–17 FOMC meeting. Released three weeks after the policy decision.", date: d(2026, 7, 8), time: "2:00 p.m. ET", link: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
  { id: "fomc-2026-07", title: "FOMC Meeting (July)", publisher: "Federal Reserve", category: "Monetary Policy", description: "Two-day FOMC meeting (July 28–29). Policy decision on conclusion day.", date: d(2026, 7, 29), time: "2:00 p.m. ET", link: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
  { id: "fomc-mins-2026-08", title: "FOMC Minutes (July meeting)", publisher: "Federal Reserve", category: "Monetary Policy", description: "Minutes from the July 28–29 FOMC meeting.", date: d(2026, 8, 19), time: "2:00 p.m. ET", link: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
  { id: "fomc-2026-09", title: "FOMC Meeting (September)", publisher: "Federal Reserve", category: "Monetary Policy", description: "Two-day FOMC meeting (September 15–16). Policy decision and Summary of Economic Projections on conclusion day.", date: d(2026, 9, 16), time: "2:00 p.m. ET", link: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
  { id: "fomc-mins-2026-10", title: "FOMC Minutes (September meeting)", publisher: "Federal Reserve", category: "Monetary Policy", description: "Minutes from the September 15–16 FOMC meeting.", date: d(2026, 10, 7), time: "2:00 p.m. ET", link: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },
  { id: "fomc-2026-10", title: "FOMC Meeting (October)", publisher: "Federal Reserve", category: "Monetary Policy", description: "Two-day FOMC meeting (October 27–28). Policy decision on conclusion day.", date: d(2026, 10, 28), time: "2:00 p.m. ET", link: "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm" },

  // ───── EIA — STEO + holiday-adjusted petroleum ─────
  { id: "petroleum-2026-05-28", title: "Weekly Petroleum Status Report (Memorial Day shift)", publisher: "EIA", category: "Energy", description: "Holiday-adjusted release. Covers week ending May 22.", date: d(2026, 5, 28), time: "12:00 p.m. ET", link: "https://www.eia.gov/petroleum/supply/weekly/schedule.php" },
  { id: "petroleum-2026-09-10", title: "Weekly Petroleum Status Report (Labor Day shift)", publisher: "EIA", category: "Energy", description: "Holiday-adjusted release. Covers week ending September 4.", date: d(2026, 9, 10), time: "12:00 p.m. ET", link: "https://www.eia.gov/petroleum/supply/weekly/schedule.php" },
  { id: "steo-2026-05", title: "Short-Term Energy Outlook", publisher: "EIA", category: "Energy", description: "Monthly U.S. and world energy market forecasts (oil, natural gas, coal, electricity).", date: d(2026, 5, 12), cadence: "Monthly", link: "https://www.eia.gov/outlooks/steo/release_schedule.php" },
  { id: "steo-2026-06", title: "Short-Term Energy Outlook", publisher: "EIA", category: "Energy", description: "Monthly U.S. and world energy market forecasts.", date: d(2026, 6, 9), cadence: "Monthly", link: "https://www.eia.gov/outlooks/steo/release_schedule.php", tentative: true },
  { id: "steo-2026-07", title: "Short-Term Energy Outlook", publisher: "EIA", category: "Energy", description: "Monthly U.S. and world energy market forecasts.", date: d(2026, 7, 14), cadence: "Monthly", link: "https://www.eia.gov/outlooks/steo/release_schedule.php", tentative: true },
  { id: "steo-2026-08", title: "Short-Term Energy Outlook", publisher: "EIA", category: "Energy", description: "Monthly U.S. and world energy market forecasts.", date: d(2026, 8, 11), cadence: "Monthly", link: "https://www.eia.gov/outlooks/steo/release_schedule.php", tentative: true },
  { id: "steo-2026-09", title: "Short-Term Energy Outlook", publisher: "EIA", category: "Energy", description: "Monthly U.S. and world energy market forecasts.", date: d(2026, 9, 8), cadence: "Monthly", link: "https://www.eia.gov/outlooks/steo/release_schedule.php", tentative: true },
  { id: "steo-2026-10", title: "Short-Term Energy Outlook", publisher: "EIA", category: "Energy", description: "Monthly U.S. and world energy market forecasts.", date: d(2026, 10, 13), cadence: "Monthly", link: "https://www.eia.gov/outlooks/steo/release_schedule.php", tentative: true },

  // ───── BLS — Employment, CPI, PPI ─────
  { id: "emp-2026-05", title: "Employment Situation (Nonfarm Payrolls)", publisher: "BLS", category: "Economic", description: "Monthly employment, unemployment rate, average hourly earnings, labor force participation. April data.", date: d(2026, 5, 8), time: "8:30 a.m. ET", cadence: "Monthly · First Friday", link: "https://www.bls.gov/schedule/news_release/empsit.htm" },
  { id: "emp-2026-06", title: "Employment Situation (Nonfarm Payrolls)", publisher: "BLS", category: "Economic", description: "Monthly employment data. May data.", date: d(2026, 6, 5), time: "8:30 a.m. ET", cadence: "Monthly · First Friday", link: "https://www.bls.gov/schedule/news_release/empsit.htm", tentative: true },
  { id: "emp-2026-07", title: "Employment Situation (Nonfarm Payrolls)", publisher: "BLS", category: "Economic", description: "Monthly employment data. June data.", date: d(2026, 7, 2), time: "8:30 a.m. ET", cadence: "Monthly · First Friday", link: "https://www.bls.gov/schedule/news_release/empsit.htm", tentative: true },
  { id: "emp-2026-08", title: "Employment Situation (Nonfarm Payrolls)", publisher: "BLS", category: "Economic", description: "Monthly employment data. July data.", date: d(2026, 8, 7), time: "8:30 a.m. ET", cadence: "Monthly · First Friday", link: "https://www.bls.gov/schedule/news_release/empsit.htm", tentative: true },
  { id: "emp-2026-09", title: "Employment Situation (Nonfarm Payrolls)", publisher: "BLS", category: "Economic", description: "Monthly employment data. August data.", date: d(2026, 9, 4), time: "8:30 a.m. ET", cadence: "Monthly · First Friday", link: "https://www.bls.gov/schedule/news_release/empsit.htm", tentative: true },
  { id: "emp-2026-10", title: "Employment Situation (Nonfarm Payrolls)", publisher: "BLS", category: "Economic", description: "Monthly employment data. September data.", date: d(2026, 10, 2), time: "8:30 a.m. ET", cadence: "Monthly · First Friday", link: "https://www.bls.gov/schedule/news_release/empsit.htm", tentative: true },

  { id: "cpi-2026-05", title: "Consumer Price Index (CPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure for consumer goods and services. April data.", date: d(2026, 5, 12), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/cpi.htm" },
  { id: "cpi-2026-06", title: "Consumer Price Index (CPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure. May data.", date: d(2026, 6, 10), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/cpi.htm" },
  { id: "cpi-2026-07", title: "Consumer Price Index (CPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure. June data.", date: d(2026, 7, 14), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/cpi.htm" },
  { id: "cpi-2026-08", title: "Consumer Price Index (CPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure. July data.", date: d(2026, 8, 12), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/cpi.htm" },
  { id: "cpi-2026-09", title: "Consumer Price Index (CPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure. August data.", date: d(2026, 9, 11), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/cpi.htm" },
  { id: "cpi-2026-10", title: "Consumer Price Index (CPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure. September data.", date: d(2026, 10, 14), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/cpi.htm" },

  { id: "ppi-2026-05", title: "Producer Price Index (PPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure for producers and wholesalers. April data.", date: d(2026, 5, 13), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/ppi.htm" },
  { id: "ppi-2026-06", title: "Producer Price Index (PPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure for producers. May data.", date: d(2026, 6, 11), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/ppi.htm", tentative: true },
  { id: "ppi-2026-07", title: "Producer Price Index (PPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure for producers. June data.", date: d(2026, 7, 15), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/ppi.htm", tentative: true },
  { id: "ppi-2026-08", title: "Producer Price Index (PPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure for producers. July data.", date: d(2026, 8, 12), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/ppi.htm", tentative: true },
  { id: "ppi-2026-09", title: "Producer Price Index (PPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure for producers. August data.", date: d(2026, 9, 11), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/ppi.htm", tentative: true },
  { id: "ppi-2026-10", title: "Producer Price Index (PPI)", publisher: "BLS", category: "Economic", description: "Monthly inflation measure for producers. September data.", date: d(2026, 10, 14), time: "8:30 a.m. ET", cadence: "Monthly", link: "https://www.bls.gov/schedule/news_release/ppi.htm", tentative: true },

  // ───── OPEC ─────
  { id: "opec-2026-06", title: "OPEC and JMMC Ministerial Meeting", publisher: "OPEC", category: "Energy", description: "41st OPEC and non-OPEC Ministerial Meeting and 66th Joint Ministerial Monitoring Committee. Reviews production policy, market conditions, and output quotas.", date: d(2026, 6, 7), link: "https://www.opec.org/" },
];

export async function getMarketEvents(): Promise<MarketEvent[]> {
  return [...seed].sort((a, b) => a.date.getTime() - b.date.getTime());
}

export async function getUpcomingMarketEvents(
  limit?: number,
): Promise<MarketEvent[]> {
  const now = Date.now();
  const upcoming = (await getMarketEvents()).filter(
    (e) => e.date.getTime() >= now,
  );
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export const CATEGORY_ORDER: MarketEventCategory[] = [
  "Agriculture",
  "Monetary Policy",
  "Energy",
  "Economic",
  "Markets",
  "Walsh West",
];
