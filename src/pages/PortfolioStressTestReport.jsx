import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
const PortfolioStressTestReport = () => {
  const scenarios = [
    {
      title: "If a 2008 Bear Market happened again...",
      date: "JAN. 1, 2008 - DEC. 31, 2008",
      current: -370100,
      benchmark: -440816,
      proposed: -308231,
      benchmarkLabel: "S&P 500",
      isPositive: false,
    },
    {
      title: "If a Financial Crisis happened again...",
      date: "OCT. 15, 2007 - MAR. 02, 2009",
      current: -527816,
      benchmark: -658216,
      proposed: -445382,
      benchmarkLabel: "S&P 500",
      isPositive: false,
    },
    {
      title: "If a 2013 Bull Market happened again...",
      date: "JAN. 1, 2013 - DEC. 31, 2013",
      current: 312018,
      benchmark: 336517,
      proposed: 264264,
      benchmarkLabel: "S&P 500",
      isPositive: true,
    },
    {
      title: "If an Interest Rate Hike happened again...",
      date: "MAY. 1, 2013 - SEP. 05, 2013",
      current: 55391,
      benchmark: -61176,
      proposed: 52003,
      benchmarkLabel: "Aggregated Bond",
      isPositive: true,
    },
    {
      title: "If a 2020 Pandemic Crash happened again...",
      date: "FEB. 20, 2020 - MAR. 23, 2020",
      current: -344561,
      benchmark: -400312,
      proposed: -293567,
      benchmarkLabel: "S&P 500",
      isPositive: false,
    },
    {
      title: "If a 2022 Inflation Crash happened again...",
      date: "JAN. 1, 2022 - DEC. 31, 2022",
      current: -216772,
      benchmark: -217676,
      proposed: -205562,
      secondBenchmark: -159008,
      benchmarkLabel: "S&P 500",
      secondBenchmarkLabel: "Aggregated Bond",
      isPositive: false,
    },
  ];
  const formatCurrency = (value) => {
    const absValue = Math.abs(value);
    if (absValue >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    }
    return value.toLocaleString();
  };
  const getPercentageChange = (value, benchmark) => {
    return ((value / benchmark) * 100).toFixed(1) + "%";
  };
  return (
    <div className="container-fluid p-4 w-100 bg-white">
      <div
        className="mb-4"
        style={{ borderTop: "5px solid grey", paddingTop: "3px" }}
      >
        <div>
          <div className="d-flex justify-content-between items-center p-3 border-b">
            <h4
              className="mb-0"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              Portfolio Stress Tests
            </h4>
            <div className="d-flex gap-3">
              <div className="d-flex items-center gap-2">
                <span
                  style={{
                    height: "35px",
                    width: "35px",
                    fontSize: "8px",
                    fontWeight: "800",
                    border: "2px solid black",
                    textAlign: "center",
                    padding: "5px",
                  }}
                >
                  RISK 78
                </span>
                <div className="d-flex flex-column">
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>
                    Portfolio
                  </span>
                  <span style={{ fontSize: "12px" }}>Current Portfolio</span>
                </div>
              </div>
              <div className="d-flex items-center gap-2">
                <span
                  style={{
                    height: "35px",
                    width: "35px",
                    fontSize: "8px",
                    fontWeight: "800",
                    border: "2px solid black",
                    textAlign: "center",
                    padding: "5px",
                  }}
                >
                  RISK 78
                </span>
                <div className="d-flex flex-column">
                  <span style={{ fontSize: "12px", fontWeight: "600" }}>
                    Portfolio
                  </span>
                  <span style={{ fontSize: "12px" }}>Current Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-muted small mb-4" style={{ fontSize: "11px" }}>
            Portfolio stress tests depict how your portfolio may have performed
            during notable market events when we apply current asset allocations
            as compared to a benchmark and broad market based index.
          </p>
          <hr />
        </div>
      </div>
      <div className="row g-4">
        {scenarios.map((scenario, index) => (
          <div key={index} className="col-md-6">
            <div style={{ height: "160px" }}>
              <div>
                <div
                  className="d-flex align-items-center p-1"
                  style={{
                    backgroundColor: "grey",
                    borderBottom: "5px solid black",
                    alignItems: "center",
                  }}
                >
                  {scenario.isPositive ? (
                    <TrendingUp className="text-success me-2" />
                  ) : (
                    <TrendingDown className="text-danger me-2" />
                  )}
                  <div className="pt-2">
                    <h5
                      className="card-title mb-0"
                      style={{ fontSize: "14px" }}
                    >
                      {scenario.title}
                    </h5>
                    <p
                      className="text-muted small "
                      style={{ fontSize: "11px" }}
                    >
                      {scenario.date}
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span
                        style={{
                          height: "40px",
                          width: "35px",
                          fontSize: "8px",
                          fontWeight: "800",
                          border: "2px solid black",
                          textAlign: "center",
                          padding: "6px",
                        }}
                      >
                        RISK 78
                      </span>
                      <span className="fw-bold" style={{ fontSize: "11px" }}>
                        Current Portfolio
                      </span>
                    </div>
                    <span
                      className={
                        scenario.current >= 0 ? "text-success" : "text-danger"
                      }
                      style={{ fontSize: "11px" }}
                    >
                      ${formatCurrency(scenario.current)}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <span
                        style={{
                          height: "40px",
                          width: "35px",
                          fontSize: "8px",
                          fontWeight: "800",
                          border: "2px solid black",
                          textAlign: "center",
                          padding: "6px",
                        }}
                      >
                        RISK 78
                      </span>
                      <span className="fw-bold" style={{ fontSize: "11px" }}>
                        {scenario.benchmarkLabel}
                      </span>
                    </div>
                    <span
                      className={
                        scenario.benchmark >= 0 ? "text-success" : "text-danger"
                      }
                      style={{ fontSize: "11px" }}
                    >
                      ${formatCurrency(scenario.benchmark)}
                    </span>
                  </div>
                  {scenario.secondBenchmark && (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div>
                        <span
                          style={{
                            height: "40px",
                            width: "35px",
                            fontSize: "8px",
                            fontWeight: "800",
                            border: "2px solid black",
                            textAlign: "center",
                            padding: "6px",
                          }}
                        >
                          RISK 78
                        </span>
                        <span className="fw-bold" style={{ fontSize: "11px" }}>
                          {scenario.secondBenchmarkLabel}
                        </span>
                      </div>
                      <span
                        className={
                          scenario.secondBenchmark >= 0
                            ? "text-success"
                            : "text-danger"
                        }
                        style={{ fontSize: "11px" }}
                      >
                        ${formatCurrency(scenario.secondBenchmark)}
                      </span>
                    </div>
                  )}
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span
                        style={{
                          height: "40px",
                          width: "35px",
                          fontSize: "8px",
                          fontWeight: "800",
                          border: "2px solid black",
                          textAlign: "center",
                          padding: "6px",
                        }}
                      >
                        RISK 78
                      </span>
                      <span className="fw-bold" style={{ fontSize: "11px" }}>
                        Proposed Portfolio
                      </span>
                    </div>
                    <span
                      className={
                        scenario.proposed >= 0 ? "text-success" : "text-danger"
                      }
                      style={{ fontSize: "11px" }}
                    >
                      ${formatCurrency(scenario.proposed)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t text-sm text-gray-600 mt-4 pt-4">
        <div
          className="d-flex justify-content-between items-center "
          style={{ fontSize: "12px", borderBottom: "3px solid grey" }}
        >
          <div>Page 1 / 5 • Report Name</div>
          <div
            style={{
              border: "2px solid grey",
              fontSize: "12px",
              padding: "2px",
              marginBottom: "5px",
            }}
          >
            Firm Logo
          </div>
        </div>
        <p className="mt-3 text-xs" style={{ fontSize: "11px" }}>
          © 2023 Nitrogen, Inc. All Rights Reserved. This information is for
          illustrative purposes only and does not represent any actual
          investment allocations. Information contained herein was derived from
          accounts information provided by your financial representative which
          cannot be verified by Nitrogen and may not be copied or redistributed
          and only constitutes investment advice offered by Nitrogen and
          provided solely for informational purposes and (ii) not constitute an
          offer to buy or sell any securities and are not warranted to be
          correct, complete or accurate. Except as otherwise provided by law,
          Nitrogen shall not be responsible for any trading decisions, damages
          or other losses resulting from, or related to, this information, data,
          analyses or opinions or their use. References to specific literature.
        </p>
      </div>
    </div>
  );
};
export default PortfolioStressTestReport;
