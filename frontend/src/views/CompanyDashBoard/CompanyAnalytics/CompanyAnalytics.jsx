import { Grid } from "@mui/material";
import React from "react";
import CompanyNavbarIn from "../../../components/CompanyNavbarIn";
import { Line } from "react-chartjs-2";
import "./analytics.css";
import { FcBullish } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";

import { VscGraphLine } from "react-icons/vsc";
import { useState } from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { MdEmojiPeople } from "react-icons/md";
import { jobdiversitydata } from "./jobdiversitydata";

import { jobdiversitydata2 } from "./jobdiversitydata";
import { Pie } from "react-chartjs-2";

function CompanyAnalytics() {
  const [totalactive, settotalactive] = useState(true);

  const [totalvisit, settotalvisit] = useState(false);

  return (
    <Grid container>
      <CompanyNavbarIn />
      <Grid container className="reminder_page" direction="column">
        <Grid item className="title_reminder">
          Analytics
        </Grid>
        <Grid item> View your application trends and resources.</Grid>
        <br />
        <br />
        {/* Grid item for first row */}
        <Grid item>
          <Grid container direction={"row"}>
            {/* 1st column 1st container */}
            <Grid item className="small_analytics">
              <Grid container direction="column">
                <Grid item className="small_ana_topic">
                  Total Job Vacanies
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent={"space-between"}
                  >
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item className="small_ana_number2">
                          40
                        </Grid>
                        <Grid item>For 3 posts</Grid>
                      </Grid>
                    </Grid>

                    <Grid item className="small_ana_iconcolor">
                      <RiUserSearchFill size={45} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Second container */}
            <Grid item className="small_analytics">
              <Grid container direction="column">
                <Grid item className="small_ana_topic">
                  Total No. of Applicants
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent={"space-between"}
                  >
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item className="small_ana_number2">
                          10
                        </Grid>
                        <Grid item>For 2 posts</Grid>
                      </Grid>
                    </Grid>

                    <Grid item className="small_ana_iconcolor2">
                      <MdEmojiPeople size={45} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* THird container */}
            <Grid item className="small_analytics">
              <Grid container direction="column">
                <Grid item className="small_ana_topic">
                  Total active users
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent={"space-between"}
                  >
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            alignItems={"center"}
                            className={
                              totalactive
                                ? "green_second_row"
                                : "red_second_row"
                            }
                          >
                            <Grid item className="small_icon_spacing">
                              <VscGraphLine />
                            </Grid>
                            <Grid item>+2.0%</Grid>
                          </Grid>
                        </Grid>
                        <Grid item className="small_ana_number">
                          6000
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      {totalactive ? (
                        <FcBullish className="icon_class_name" size={45} />
                      ) : (
                        <FcBearish size={45} />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* forth container */}
            <Grid item className="small_analytics">
              <Grid container direction="column">
                <Grid item className="small_ana_topic">
                  Total Profile Visit
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent={"space-between"}
                  >
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            alignItems={"center"}
                            className={
                              totalvisit ? "green_second_row" : "red_second_row"
                            }
                          >
                            <Grid item className="small_icon_spacing">
                              <VscGraphLine />
                            </Grid>
                            <Grid item>-0.50%</Grid>
                          </Grid>
                        </Grid>
                        <Grid item className="small_ana_number">
                          120
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      {totalvisit ? (
                        <FcBullish className="icon_class_name" size={45} />
                      ) : (
                        <FcBearish size={45} />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Grid item for a chart */}
        <Grid item className="conversion_container">
          <Grid item className="conversion_topic">
            Conversion Rate
          </Grid>

          <Grid
            container
            direction="row"
            defaultValue="hhh"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Grid container direction="row" alignItems={"center"}>
                    <Grid item className="analytics_headings">
                      Applied no. of candidates:
                    </Grid>
                    <Grid item className="analytics_subheadings">
                      55
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="row">
                    <Grid item className="analytics_headings">
                      ShortListed candidates:
                    </Grid>
                    <Grid item className="analytics_subheadings">
                      40
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item className="analytics_headings">
                      Interviewed candidates:
                    </Grid>
                    <Grid item className="analytics_subheadings">
                      20
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item className="analytics_headings">
                      Hired candidates:
                    </Grid>
                    <Grid item className="analytics_subheadings">
                      5
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="small_ana_number3">
              {" "}
              59.0%
            </Grid>
          </Grid>
        </Grid>

        {/* COntainer for trends */}
        <Grid item className="conversion_container">
          <Grid container direction="column">
            <Grid item className="conversion_topic">
              Trends
            </Grid>
            <Grid item>
              <Grid container direction={"row"} justifyContent="space-around">
                <Grid item>
                  **Pie chart goes here**
                  {/* <Pie data={jobdiversitydata} /> */}
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item className="trends_topic">
                      {" "}
                      Job Diversity
                    </Grid>
                    <br />
                    {jobdiversitydata.map((val) => (
                      <Grid container direction="row">
                        <Grid item className="analytics_headings">
                          {val.title}:
                        </Grid>
                        <Grid item className="analytics_subheadings">
                          {" "}
                          {val.number}
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            {/* LOcation tren */}
            <Grid item>
              <Grid container direction="row" justifyContent="space-around">
                <Grid item>
                  <Grid container direction="column">
                    <Grid item className="trends_topic">
                      {" "}
                      Location:
                    </Grid>
                    <br />
                    <Grid item>Kathmandu</Grid>
                    <Grid item>Lalitpur</Grid>
                    <Grid item> Banepa</Grid>
                  </Grid>
                </Grid>
                <Grid item> ** bar graph goes here**</Grid>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            {/* Age trend */}
            <Grid item>
              <Grid container direction="row" justifyContent="space-around">
                <Grid item> ** bar graph goes here**</Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item className="trends_topic">
                      {" "}
                      Age Groups:
                    </Grid>
                    <br />
                    <Grid item>Kathmandu</Grid>
                    <Grid item>Lalitpur</Grid>
                    <Grid item> Banepa</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyAnalytics;
