import React from "react";
const RetirementMapReport = () => {
  return (
    <div className="container w-100 bg-none">
      {/* Header Section */}
      <div
        style={{ height: "7px", backgroundColor: "gray", marginBottom: "10px" }}
      ></div>
      <div className="row">
        <div className="col-md-9">
          <h4 className="fw-bold">Retirement Map</h4>
        </div>
        <div className="col-md-3 text-end mb-1 ">
          <div className="text-muted small" style={{ fontSize: "12px" }}>
            Portfolio
          </div>
          <div
            className="text-muted small"
            style={{ fontWeight: "bolder", fontSize: "12px" }}
          >
            Current Portfolio
          </div>
        </div>
      </div>
      <p className="text-muted" style={{ fontSize: "11px" }}>
        The retirement map informally depicts the possible scenarios that
        contribute to the likelihood your assets will last throughout your
        retirement. This is meant to be educational and does not represent
        investment advice.
      </p>
      {/* Graph Section */}
      <div className="row my-4">
        <div className="col-12">
          <div className="border p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 400"
              className="w-100"
              style={{ height: "250px" }}
            >
              <polygon
                points="50,350 200,200 400,100 600,150 750,350"
                fill="#f8d7da"
              />
              <polyline
                points="50,350 200,200 400,100 600,150 750,350,700"
                stroke="#d9534f"
                fill="none"
                strokeWidth="2"
              />
            </svg>
            <div className="d-flex justify-content-between">
              <div style={{ fontSize: "12px" }}>
                <span className="fw-bold" style={{ fontSize: "12px" }}>
                  Probability
                </span>
                : 67%
              </div>
              <div style={{ fontSize: "12px" }}>
                <span className="fw-bold" style={{ fontSize: "12px" }}>
                  Retirement Year
                </span>
                : 2070
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Assumptions Section */}
      <div className="row border-top pt-1" style={{ fontSize: "12px" }}>
        <div className="col-md-12">
          <h6 className="fw-bold">Assumptions</h6>
        </div>
        <div className="row">
          <ul className="list-unstyled d-flex flex-wrap">
            <li className="col-6 col-md-3 mb-3">
              <span className="fw-bold">Investment Amount:</span>
              <br /> $1,100,000
            </li>
            <li className="col-6 col-md-3 mb-3">
              <span className="fw-bold">Monthly Savings:</span>
              <br /> $1,000
            </li>
            <li className="col-6 col-md-3 mb-3">
              <span className="fw-bold">Monthly Withdrawal:</span>
              <br /> $8,500
            </li>
            <li className="col-6 col-md-3 mb-3">
              <span className="fw-bold">Birth Year:</span>
              <br /> 1955
            </li>
            <li className="col-6 col-md-3 mb-1">
              <span className="fw-bold">Life Expectancy:</span>
              <br /> 90
            </li>
            <li className="col-6 col-md-3 mb-1">
              <span className="fw-bold">Inflation Rate:</span>
              <br /> 2.0%
            </li>
            <li className="col-6 col-md-3 mb-1">
              <span className="fw-bold">Assumed Annual Return:</span>
              <br /> 7.5%
            </li>
            <li className="col-6 col-md-3 mb-1">
              <span className="fw-bold">Annual Savings Return:</span>
              <br /> 0.2%
            </li>
          </ul>
        </div>
      </div>
      {/* Timeline Events Section */}
      <div className="row border-top pt-3">
        <div className="col-md-12">
          <h6 className="fw-bold">Timeline Events</h6>
        </div>
        <div className="col-12">
          <table className="table table-bordered table-striped">
            <thead>
              <tr style={{ padding: "5px" }}>
                <th style={{ padding: "5px" }}>Event Name</th>
                <th>Event Type</th>
                <th>$ Amount</th>
                <th>Start Date</th>
                <th>Frequency</th>
                <th>Risk Number</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ padding: "5px" }}>
                <td style={{ padding: "5px" }}>Event Name</td>
                <td>Deposit</td>
                <td>+20,000.00</td>
                <td>Nov. 2031</td>
                <td>No End</td>
                <td>-</td>
              </tr>
              <tr>
                <td style={{ padding: "5px" }}>Event Name</td>
                <td>Risk Adjustment</td>
                <td>-</td>
                <td>Nov. 2031</td>
                <td>Monthly</td>
                <td>50/20</td>
              </tr>
              <tr>
                <td style={{ padding: "5px" }}>Event Name</td>
                <td>Withdrawal</td>
                <td>-20,000.00</td>
                <td>Nov. 2031</td>
                <td>Annually until Dec. 2026</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        style={{ backgroundColor: "grey", fontSize: "13px", padding: "3px" }}
      >
        Confirm to next page
      </div>
      {/* Footer Section */}
      <div className="p-2 border-t text-sm text-gray-600">
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
export default RetirementMapReport;
