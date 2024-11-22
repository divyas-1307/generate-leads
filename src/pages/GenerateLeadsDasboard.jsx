import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Paper,
  Slider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import cardImg1 from "../assets/images/card1.png";
import cardImg2 from "../assets/images/card2.png";
import cardImg3 from "../assets/images/card3.png";
import cardImg4 from "../assets/images/card4.png";
import cardImg5 from "../assets/images/card5.png";
import cardImg6 from "../assets/images/card6.png";
import cardImg7 from "../assets/images/card7.png";
import cardImg8 from "../assets/images/card8.png";
import cardImg9 from "../assets/images/card9.png";
import cardImg10 from "../assets/images/card10.png";
import cardImg11 from "../assets/images/card11.png";
import cardImg12 from "../assets/images/card12.png";
import cardImg13 from "../assets/images/card13.png";
import cardImg14 from "../assets/images/card14.png";
import cardImg15 from "../assets/images/card15.png";
import cardImg16 from "../assets/images/card16.png";
import SavingsIcon from "@mui/icons-material/Savings";
import SchoolIcon from "@mui/icons-material/School";

const GenerateLeadsDashboard = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Risk Tolerance",
      description:
        "Overview of the client’s Risk Number, risk tolerance, and financial goals.",
      image: cardImg1,
    },
    {
      id: 2,
      title: "Cover Page",
      description:
        "A cover page to display your Report title and contact information.",
      image: cardImg2,
    },
    {
      id: 3,
      title: "Regional Exposure",
      description:
        "A breakdown of the portfolio across seven geographic regions.",
      image: cardImg3,
    },
    {
      id: 4,
      title: "Modeled Performance",
      description:
        "View the modeled performance of a portfolio and add multiple comparisons and timeframes.",
      image: cardImg4,
    },
    {
      id: 5,
      title: "Portfolio Heatmaps",
      description:
        "View the Risk, Reward, and Diversified Risk of all holdings within a portfolio.",
      image: cardImg5,
    },
    {
      id: 6,
      title: "Asset Allocation",
      description:
        "Stocks, Bonds, Cash, and Other breakdowns for the entire portfolio.",
      image: cardImg6,
    },
    {
      id: 7,
      title: "Snapshot Report",
      description:
        "A one-pager report that highlights risk alignment, asset classes, portfolio costs, and more.",
      image: cardImg7,
    },
    {
      id: 8,
      title: "Risk & Reward",
      description:
        "Paint the picture of portfolio risk efficiency and show various time frames.",
      image: cardImg8,
    },
    {
      id: 9,
      title: "Retirement Maps",
      description:
        "The Retirement Map informally depicts the possible scenarios for a client’s assets.",
      image: cardImg9,
    },
    {
      id: 10,
      title: "Portfolio Holdings",
      description: "A weighted breakdown of the holdings in each account.",
      image: cardImg10,
    },
    {
      id: 11,
      title: "Signatures",
      description:
        "Add a page to collect multiple client signatures on a report.",
      image: cardImg11,
    },
    {
      id: 12,
      title: "Diversification",
      description:
        "Measure the impact of anti-correlation between various holdings in a portfolio.",
      image: cardImg12,
    },
    {
      id: 13,
      title: "Stress Tests",
      description:
        "Depict how a portfolio may have performed during notable market events.",
      image: cardImg13,
    },
    {
      id: 14,
      title: "Portfolio Costs",
      description:
        "Tax Drag, Expense Ratio, & Advisory Fee breakdown by each account, and the portfolio.",
      image: cardImg14,
    },
    {
      id: 15,
      title: "Asset Allocation Sectors",
      description:
        "Breakdowns for the entire portfolio's asset allocation sectors.",
      image: cardImg15,
    },
    {
      id: 16,
      title: "Size & Style",
      description:
        "View the 'market cap class' of the portfolio’s equity exposure into Small, Mid, and Large Cap.",
      image: cardImg16,
    },
  ];

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

  const handleAddClick = (id) => {
    setActiveCard(id);
  };
  return (
    <Box sx={{ padding: 4, overflow: "hidden" }}>
      <Grid container spacing={4}>
        {activeCard && (
          <Grid container spacing={4} sx={{ margin: 2 }}>
            {/* First Column: Active Card */}
            <Grid
              item
              xs={12}
              md={3}
              sm={3}
              lg={3}
              className="active-card"
              sx={{
                minHeight: "500px",
                maxHeight: "96vh", // Optional, limits the container height to viewport
                overflowY: "auto",
                scrollBehavior: "smooth", // Smooth scrolling
                padding: 0,
              }}
            >
              {cards.map((card) => (
                <Grid
                  item
                  key={card.id}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "8px",
                  }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#ffffff",
                      borderRadius: 2,
                      boxShadow: 3,
                      width: "100%",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    {/* Top Row: Image */}
                    <Box
                      component="img"
                      src={card.image}
                      alt={card.title}
                      sx={{
                        width: "95%",
                        height: 56,
                        objectFit: "contain",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        margin: "10px",
                      }}
                    />

                    {/* Second Row: Content and Button */}
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {/* Left: Title and Description */}
                      <Box
                        sx={{
                          flex: 1,
                          pr: 2,
                        }}
                      >
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {card.description}
                        </Typography>
                      </Box>

                      {/* Right: Button */}
                      {activeCard === card.id ? (
                        <Button
                          variant="outlined"
                          startIcon={<CheckCircleIcon />}
                          disabled
                          sx={{
                            color: "#28a745",
                            borderColor: "#28a745",
                          }}
                        >
                          Added
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          startIcon={<AddIcon fontSize="18px" />}
                          onClick={() => handleAddClick(card.id)}
                        >
                          Add
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Second Column: A4 Sheet Design */}
            <Grid
              sm={9}
              lg={6}
              md={6}
              xs={12}
              sx={{ padding: "20px", marginLeft: "34px" }}
            >
              <Grid
                spacing={2}
                container
                sx={{ backgroundColor: "transparent" }}
              >
                {/* Left Section: Main Content */}
                <Grid item xs={12} md={12} sx={{ background: "#f8f9fa" }}>
                  <Box
                    sx={{
                      padding: "20px",
                      borderRadius: "8px",
                      minHeight: "80vh",
                    }}
                  >
                    <Box
                      sx={{ borderTop: "5px solid #000", borderWidth: "5px" }}
                    ></Box>
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
                        Establishing a Risk Number sets the groundwork for the
                        financial professional and client to discuss investment
                        objectives, need and risk tolerance. You completed a
                        risk questionnaire and using advanced quantitative risk
                        technology on February 25,2023. The result are included
                        below. It is critically important that you keep your
                        financial professional updated whenever these answers
                        and situations are updated change.
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
                                This means over the next 6 months, you are
                                comfortable risking loss for the chance of
                                gaining a defined range.
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
                              <Typography
                                variant="body2"
                                fontSize={11}
                                fontWeight="bold"
                              >
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
                              <Typography
                                gutterBottom
                                variant="body2"
                                fontSize={11}
                              >
                                Your were asked to think about the next 6 months
                                in order to establish your comfort Zone.
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="body2"
                                fontSize={11}
                              >
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
                    <Typography variant="caption" color="text.secondary">
                      Page 1 / 5 - Report Name
                    </Typography>
                  </Box>
                </Grid>
                {/* Footer Section */}
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
          </Grid>
        )}

        {!activeCard &&
          cards.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={card.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  boxShadow: 3,
                  width: "100%",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {/* Top Row: Image */}
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    width: "95%",
                    height: 56,
                    objectFit: "contain",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    margin: "10px",
                  }}
                />

                {/* Second Row: Content and Button */}
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Left: Title and Description */}
                  <Box
                    sx={{
                      flex: 1,
                      pr: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </Box>

                  {/* Right: Button */}
                  {activeCard === card.id ? (
                    <Button
                      variant="outlined"
                      startIcon={<CheckCircleIcon />}
                      disabled
                      sx={{
                        color: "#28a745",
                        borderColor: "#28a745",
                      }}
                    >
                      Added
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      startIcon={<AddIcon fontSize="18px" />}
                      onClick={() => handleAddClick(card.id)}
                    >
                      Add
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default GenerateLeadsDashboard;
{
  /* <Grid item xs={12} sm={6} md={4} lg={size}>
                  <Typography className="crt-fnt-lable-light" mt={1}>
                    Date
                  </Typography>
                  <Typography gutterBottom className="crt-lable-input" mt={1}>
                    {requestData.date ? formatDate(requestData.date) : "--"}
                  </Typography>
                </Grid> */
}
