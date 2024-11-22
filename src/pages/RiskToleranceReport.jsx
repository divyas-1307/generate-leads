import { Box, Divider, Grid, Paper, Slider, Typography } from "@mui/material";
import React from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import SchoolIcon from "@mui/icons-material/School";

const RiskToleranceReport = () => {
  const data = [
    {
      test: "Comfort Zone Test 1",
      risk: "-9.6% / +15.3% over a certainty of 2.3%",
      minValue: -114962,
      maxValue: 183221,
    },
    {
      test: "Comfort Zone Test 2",
      risk: "-9.6% / +15.3% over a certainty of 3.3%",
      minValue: -114962,
      maxValue: 183221,
    },
    {
      test: "Comfort Zone Test 3",
      risk: "+4.3% over a certainty of -12.8% / +12.1%",
      minValue: -120467,
      maxValue: 163137,
    },
    {
      test: "Comfort Zone Test 4",
      risk: "-15.0% / +18.3% over a certainty of 2.3%",
      minValue: -153283,
      maxValue: 197124,
    },
    {
      test: "Comfort Zone Test 5",
      risk: "+4.3% over a certainty of -14.8% / +19.3%",
      minValue: -146187,
      maxValue: 201888,
    },
  ];
  return (
    <div>
      <Box
        sx={{
          padding: "20px",
          borderRadius: "8px",
          minHeight: "80vh",
        }}
      >
        <Box sx={{ borderTop: "5px solid #000", borderWidth: "5px" }}></Box>
        {/* Add Content Sections */}
        <Box sx={{ marginTop: "20px" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Risk Tolerance
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={12}
            gutterBottom
          >
            Establishing a Risk Number sets the groundwork for the financial
            professional and client to discuss investment objectives, need and
            risk tolerance. You completed a risk questionnaire and using
            advanced quantitative risk technology on February 25,2023. The
            result are included below. It is critically important that you keep
            your financial professional updated whenever these answers and
            situations are updated change.
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              //   flexDirection: "row",
              gap: "16px",
              marginTop: "10px",
            }}
          >
            <Box>
              <Grid container>
                <Grid lg={1.4}>
                  <Paper
                    elevation={3}
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "#FFFFFF",
                      textAlign: "center",
                      border: "2px solid #000",
                      fontSize: "14px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#33496A",
                        fontWeight: "700",
                        fontSize: "13px",
                        letterSpacing: 0.2,
                      }}
                    >
                      RISK
                    </Typography>
                    <Typography
                      sx={{
                        color: "#33496A",
                        fontSize: "17px",
                        fontWeight: "700",
                      }}
                    >
                      60
                    </Typography>
                  </Paper>
                </Grid>
                <Grid lg={6}>
                  <Typography variant="body2" fontWeight="bold">
                    Your Risk Number
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={11}
                  >
                    This means over the next 6 months, you are comfortable
                    risking loss for the chance of gaining a defined range.
                  </Typography>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid lg={4.4} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontSize={11}
                  >
                    95% HISTORICAL RANGE (6 MONTHS)
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                    gap={2}
                  >
                    <Typography
                      variant="body2"
                      color="#e40000"
                      fontSize={14}
                      fontWeight={600}
                    >
                      - $148,650
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography
                      variant="body2"
                      color="green"
                      fontSize={14}
                      fontWeight={600}
                    >
                      + $148,650
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container mt={3}>
                <Grid lg={5}>
                  <Typography variant="body2" fontSize={11} fontWeight="bold">
                    FINANCIAL GOALS
                  </Typography>
                  <Box
                    my={1}
                    sx={{
                      borderTop: "2px solid #000",
                      borderWidth: "2px",
                    }}
                  ></Box>
                  <Typography
                    variant="body2"
                    fontSize={12}
                    fontWeight="bold"
                    className="goals-text"
                  >
                    <SavingsIcon /> Retirement
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize={12}
                    fontWeight="bold"
                    mt={2}
                    className="goals-text"
                  >
                    <SchoolIcon /> College Savings
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize={11}
                    fontWeight="bold"
                    mt={2}
                  >
                    RETIREMENT HORIZON
                  </Typography>
                  <Box
                    my={1}
                    sx={{
                      borderTop: "2px solid #000",
                      borderWidth: "2px",
                    }}
                  ></Box>
                  <Box style={{ display: "flex" }} gap={2}>
                    <div>
                      <Typography
                        variant="body2"
                        fontSize={10}
                        fontWeight="500"
                        mt={1}
                      >
                        BIRTH YEAR
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        fontSize={13}
                        fontWeight="bold"
                      >
                        1995
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="body2"
                        fontSize={10}
                        fontWeight="500"
                        mt={1}
                      >
                        RETIREMENT AGE
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        fontSize={13}
                        fontWeight="bold"
                      >
                        70
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="body2"
                        fontSize={10}
                        fontWeight="500"
                        mt={1}
                      >
                        RETIREMENT YEAR
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        fontSize={13}
                        fontWeight="bold"
                      >
                        2025
                      </Typography>
                    </div>
                  </Box>
                  <Typography
                    variant="body2"
                    fontSize={11}
                    fontWeight="bold"
                    mt={2}
                  >
                    FINANCIAL SENTIMENT
                  </Typography>
                  <Box
                    my={1}
                    sx={{
                      borderTop: "2px solid #000",
                      borderWidth: "2px",
                    }}
                  ></Box>
                  <Box style={{ display: "flex" }} gap={2}>
                    <div>
                      <Typography
                        variant="body2"
                        fontSize={10}
                        fontWeight="500"
                        mt={1}
                      >
                        MARKET SENTIMENT
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        fontSize={13}
                        fontWeight="bold"
                      >
                        Negative
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="body2"
                        fontSize={10}
                        fontWeight="500"
                        mt={1}
                      >
                        FINANCIAL FUTURE
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        fontSize={13}
                        fontWeight="bold"
                      >
                        Anxious
                      </Typography>
                    </div>
                  </Box>
                </Grid>
                <Grid lg={7} ml={0}>
                  <Typography
                    variant="h6"
                    fontSize={13}
                    fontWeight="700"
                    mt={1}
                  >
                    Your Comfort Zone
                  </Typography>
                  <Typography gutterBottom variant="body2" fontSize={11}>
                    Your were asked to think about the next 6 months in order to
                    establish your comfort Zone.
                  </Typography>
                  <Typography gutterBottom variant="body2" fontSize={11}>
                    Here are your responses:
                  </Typography>
                  {data.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Typography
                        variant="body2"
                        fontWeight="bold"
                        fontSize={12}
                      >
                        {item.test}: {item.risk}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                        gap={2}
                      >
                        <Typography
                          variant="body2"
                          color="#e40000"
                          fontSize={14}
                          fontWeight={600}
                        >
                          - {item.minValue}
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                          variant="body2"
                          color="green"
                          fontSize={14}
                          fontWeight={600}
                        >
                          + {item.maxValue}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: 1,
                        }}
                      >
                        <Slider
                          defaultValue={[item.minValue, item.maxValue]}
                          valueLabelDisplay="off"
                          min={0}
                          max={100}
                          track="inverted"
                          sx={{
                            width: "60%",
                            color: "green",
                            "& .MuiSlider-thumb": {
                              width: 12,
                              height: 12,
                            },
                            "& .MuiSlider-track": {
                              backgroundColor: "green",
                            },
                          }}
                          //   disabled
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Box>
            {/* Add more sections or graphs as needed */}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "16px",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <div className="p-2 border-t text-sm text-gray-600">
          <div
            className="d-flex justify-content-between items-center "
            style={{
              fontSize: "12px",
              borderBottom: "3px solid grey",
            }}
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
      </Box>
    </div>
  );
};

export default RiskToleranceReport;
