import React from "react";
import {
  LineChart,
  BarChart,
  Globe,
  Building2,
  Coins,
  Wallet,
} from "lucide-react";
const PortfolioHeatMapReport = () => {
  const accounts = [
    {
      id: 61,
      type: "Investment Account",
      total: 237592,
      investments: [
        {
          name: "SPY • SPDR® S&P 500 ETF",
          icon: <LineChart size={16} />,
          expenseRatio: "0.10%",
          annualDividend: "1.47%",
          taxDrag: "0.53%",
          riskReward: {
            div: "4.25%",
            risk: "8.54%",
            reward: "6.81%",
          },
        },
        {
          name: "AON • iShares Core Growth Allocation",
          icon: <BarChart size={16} />,
          expenseRatio: "0.12%",
          annualDividend: "1.85%",
          taxDrag: "0.74%",
          riskReward: {
            div: "2.01%",
            risk: "16.54%",
            reward: "9.52%",
          },
        },
        {
          name: "WBII • WBI BullBear Global Income ETF",
          icon: <Globe size={16} />,
          expenseRatio: "0.68%",
          annualDividend: "0.00%",
          taxDrag: "0.79%",
          riskReward: {
            div: "4.56%",
            risk: "14.67%",
            reward: "5.10%",
          },
        },
        {
          name: "BND • Vanguard Total Bond Market ETF",
          icon: <Building2 size={16} />,
          expenseRatio: "0.03%",
          annualDividend: "2.67%",
          taxDrag: "0.99%",
          riskReward: {
            div: "6.67%",
            risk: "10.34%",
            reward: "7.56%",
          },
        },
        {
          name: "XLI • Industrial Select Sector SPDR® ETF",
          icon: <BarChart size={16} />,
          expenseRatio: "0.67%",
          annualDividend: "1.23%",
          taxDrag: "1.34%",
          riskReward: {
            div: "0.34%",
            risk: "14.67%",
            reward: "12.64%",
          },
        },
        {
          name: "XLF • Financial Select Sector SPDR® ETF",
          icon: <Building2 size={16} />,
          expenseRatio: "0.10%",
          annualDividend: "2.01%",
          taxDrag: "0.75%",
          riskReward: {
            div: "0.21%",
            risk: "6.21%",
            reward: "4.81%",
          },
        },
        {
          name: "MUB • PIMCO Intermediate Municipal Bd Actv ETF",
          icon: <Building2 size={16} />,
          expenseRatio: "0.35%",
          annualDividend: "2.48%",
          taxDrag: "0.75%",
          riskReward: {
            div: "6.67%",
            risk: "10.34%",
            reward: "7.56%",
          },
        },
        {
          name: "Cash / Money Market",
          icon: <Wallet size={16} />,
          expenseRatio: "0.00%",
          annualDividend: "0.00%",
          taxDrag: "0.00%",
          riskReward: {
            div: "0.00%",
            risk: "0.00%",
            reward: "0.00%",
          },
        },
      ],
    },
    {
      id: 76,
      type: "Investment Account - Taxable",
      total: 959935,
      investments: [
        {
          name: "AAPL • Apple Inc.",
          icon: <LineChart size={16} />,
          expenseRatio: "0.00%",
          annualDividend: "0.52%",
          taxDrag: "0.23%",
          riskReward: {
            div: "0.67%",
            risk: "19.46%",
            reward: "10.25%",
          },
        },
        {
          name: "SPY • SPDR® S&P 500 ETF",
          icon: <LineChart size={16} />,
          expenseRatio: "0.10%",
          annualDividend: "1.47%",
          taxDrag: "0.53%",
          riskReward: {
            div: "4.25%",
            risk: "8.54%",
            reward: "6.31%",
          },
        },
        {
          name: "BND • Vanguard Total Bond Market ETF",
          icon: <Building2 size={16} />,
          expenseRatio: "0.03%",
          annualDividend: "2.67%",
          taxDrag: "0.99%",
          riskReward: {
            div: "6.67%",
            risk: "10.34%",
            reward: "7.56%",
          },
        },
        {
          name: "XLI • Industrial Select Sector SPDR® ETF",
          icon: <BarChart size={16} />,
          expenseRatio: "0.67%",
          annualDividend: "1.23%",
          taxDrag: "1.34%",
          riskReward: {
            div: "0.34%",
            risk: "14.67%",
            reward: "13.64%",
          },
        },
        {
          name: "MUB • PIMCO Intermediate Municipal Bd Actv ETF",
          icon: <Building2 size={16} />,
          expenseRatio: "0.35%",
          annualDividend: "2.48%",
          taxDrag: "0.75%",
          riskReward: {
            div: "6.67%",
            risk: "10.34%",
            reward: "7.56%",
          },
        },
      ],
    },
  ];
//   const RiskRewardBar = ({ div, risk, reward }) => (
//     <div className="flex items-center w-full">
//       <div className="w-full bg-gray-200 rounded h-3">
//         <div className="flex h-full">
//           <div
//             className="bg-yellow-400 h-full opacity-80"
//             style={{ width: div }}
            
//           />
//           <div
//             className="bg-red-500 h-full opacity-60"
//             style={{ width: risk }}
//           />
//           <div
//             className="bg-green-500 h-full opacity-80"
//             style={{ width: reward }}
//           />
//         </div>
//       </div>
//     </div>
//   );
  const AccountSection = ({ account }) => (
    <div className="">
      <div
        className="d-flex justify-content-between p-2 align-items-center"
        style={{
          borderBottom: "5px solid black",
          backgroundColor: "#b0b0b1",
          height: "60px",
          marginTop:"15px",
        }}
      >
        <div className="flex items-center">
          <div className="d-flex gap-2 align-items-center">
            <span
              style={{
                height: "40px",
                width: "40px",
                fontSize: "10px",
                fontWeight: "800",
                border: "2px solid black",
                textAlign: "center",
                padding: "5px",
              }}
            >
              RISK
              <br />
              {account.id}
            </span>
            <h5
              className="mb-0"
              style={{ fontSize: "14px", fontWeight: "bolder" }}
            >
              {account.type}
            </h5>
          </div>
        </div>
        <div className="d-flex gap-4 align-items-center">
          <div className="text-right">
            <div style={{ fontSize: "14px", fontWeight: "800" }}>
              ${account.total.toLocaleString()}
            </div>
            <small className="text-gray-500">TOTAL</small>
          </div>
          <div className="align-items-center mt-3">
            <i class="fa fa-cog fa-spin" style={{ fontSize: "22px" }}></i>
            <p style={{ fontSize: "12px" }}>GPA</p>
          </div>
        </div>
      </div>
      <div className="px-3">
        <table className="w-full">
          <thead>
            <tr className="border-b"style={{borderBottom:"1px solid grey"}}>
              <th
                className="text-left py-2 px-2 text-gray-500  font-normal w-4/12"
                style={{ fontSize: "10px" }}
              >
                RISK / HOLDING
              </th>
              <th
                className="text-center py-2 px-2 text-gray-500 font-normal w-2/12"
                style={{ fontSize: "10px" }}
              >
                EXPENSE RATIO
              </th>
              <th
                className="text-center py-2 px-2 text-gray-500 font-normal w-2/12"
                style={{ fontSize: "10px" }}
              >
                ANNUAL DIVIDEND
              </th>
              <th
                className="text-center py-2 px-2 text-gray-500 font-normal w-2/12"
                style={{ fontSize: "10px" }}
              >
                TAX DRAG
              </th>
              <th
                className="text-center py-2 px-2 text-gray-500 font-normal w-2/12"
                style={{ fontSize: "10px" }}
              >
                DIV | RISK | REWARD
              </th>
            </tr>
          </thead>
          <tbody>
            {account.investments.map((investment, idx) => (
              <tr key={idx} className="border-b " style={{borderBottom:"1px solid grey"}}>
                
                <td className=" px-2">
                  <div className="d-flex align-items-center gap-2 ">
                    {/* <div className="border rounded p-1 mr-2" style={{width:"30px"}}>
                    {investment.icon}
                  </div> */}
                    <div className="d-flex gap-2 align-items-center ">
                      <span
                        style={{
                          height: "25px",
                          width: "25px",
                          fontSize: "6px",
                          fontWeight: "800",
                          border: "2px solid black",
                          textAlign: "center",
                          padding: "3px",
                        }}
                      >
                        RISK
                        <br />
                        {account.id}
                      </span>
                    </div>
                    <small style={{ fontSize: "11px" }}>
                      {investment.name}
                    </small>
                  </div>
                </td>
                <td
                  className="text-center py-2 px-2"
                  style={{ fontSize: "12px" }}
                >
                  
                  {investment.expenseRatio}
                </td>
                <td
                  className="text-center py-2 px-2"
                  style={{ fontSize: "12px" }}
                >
                  {investment.annualDividend}
                </td>
                <td
                  className="text-center py-2 px-2"
                  style={{ fontSize: "12px" }}
                >
                  {investment.taxDrag}
                </td>
                <td className="py-2 px-2" style={{ fontSize: "12px" }}>
                    <div className="d-flex" style={{border:"1px solid grey",borderRadius:"3px"}}>
                        <div style={{height:"4px",width:"27%", backgroundColor:"yellow"}}></div>
                        <div style={{height:"4px",width:"33%",backgroundColor:"red"}}></div>
                        <div style={{height:"4px",width:"40%",backgroundColor:"green"}}></div>
                    </div>
                  {/* <RiskRewardBar {...investment.riskReward} /> */}
                </td>
                <hr/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  return (
    <div className="container mx-auto pt-4 w-100">
      <div className="bg-none rounded-lg">
        <div style={{height:"5px",background:"grey"}}></div>
        <div className="d-flex justify-content-between items-center p-3 border-b">
          <h4 className="mb-0" style={{ fontSize: "14px", fontWeight: "600" }}>
            Portfolio Heatmap
          </h4>
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
            <span style={{ fontSize: "12px",fontWeight:"600"}}>Portfolio</span>
            <span style={{ fontSize: "12px" }}>Current Portfolio</span>
            </div>
          </div>
        </div>
        <div className="px-4">
          <p
            className="text-sm text-gray-600 mb-2 "
            style={{ fontSize: "11px" }}
          >
            The heatmap depicted below expresses the weighted potential upside
            and downside that each allocation contributes to the overall
            portfolio, as well as the portion of each allocation's potential
            downside that has been diversified away due to correlation. Also
            included are the tax drag, annual dividend, and expense ratio for
            each allocation.
          </p>
          <hr/>
          {accounts.map((account, idx) => (
            <AccountSection key={idx} account={account} />
          ))}
        </div>
        <div className="p-4 border-t text-sm text-gray-600">
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
                marginBottom:"5px"
              }}
            >
              Firm Logo
            </div>
          </div>
          <p className="mt-3 text-xs" style={{ fontSize: "11px" }}>
            © 2023 Nitrogen, Inc. All Rights Reserved. This information is for
            illustrative purposes only and does not represent any actual
            investment allocations. Information contained herein was derived
            from accounts information provided by your financial representative
            which cannot be verified by Nitrogen and may not be copied or
            redistributed and only constitutes investment advice offered by
            Nitrogen and provided solely for informational purposes and (ii) not
            constitute an offer to buy or sell any securities and are not
            warranted to be correct, complete or accurate. Except as otherwise
            provided by law, Nitrogen shall not be responsible for any trading
            decisions, damages or other losses resulting from, or related to,
            this information, data, analyses or opinions or their use.
            References to specific literature.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PortfolioHeatMapReport;