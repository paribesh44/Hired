import { Grid } from "@mui/material";
import React from "react";
import CompanyNavbarIn from "../../../components/CompanyNavbarIn";
import { Line } from "react-chartjs-2";
import "./analytics.css";
import { FcBullish } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";

import { VscGraphLine } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { RiUserSearchFill } from "react-icons/ri";
import { MdEmojiPeople } from "react-icons/md";
import { jobdiversitydata } from "./jobdiversitydata";

import { jobdiversitydata2 } from "./jobdiversitydata";
import { Pie } from "react-chartjs-2";
import callAPI from "../../../utils/callAPI";


function CompanyAnalytics() {
  const [totalactive, settotalactive] = useState(true);

  const [totalvisit, settotalvisit] = useState(false);

  const [analyticsData, setAnalyticsData] = useState("");

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/analytics/get_analytics",
    });
    setAnalyticsData(response_obj);
    console.log(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  if (analyticsData.data != null) {
    console.log(analyticsData.data.job_diversity)
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
                          {analyticsData.data.total_no_of_vacancies}
                        </Grid>
                        <Grid item>For {analyticsData.data.total_no_of_posts} posts</Grid>
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
                          {analyticsData.data.total_no_of_applicants}
                        </Grid>
                        <Grid item>For {analyticsData.data.total_no_of_posts} posts</Grid>
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
                              (analyticsData.data.percentage_increas > 0)
                                ? "green_second_row"
                                : "red_second_row"
                            }
                          >
                            <Grid item className="small_icon_spacing">
                              <VscGraphLine />
                            </Grid>
                            <Grid item>{analyticsData.data.percentage_increase}%</Grid>
                          </Grid>
                        </Grid>
                        <Grid item className="small_ana_number">
                          {analyticsData.data.total_active_users}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      {analyticsData.data.percentage_increas > 0 ? (
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
                              analyticsData.data.percentage_increase < 0 ? "green_second_row" : "red_second_row"
                            }
                          >
                            <Grid item className="small_icon_spacing">
                              <VscGraphLine />
                            </Grid>
                            <Grid item>{analyticsData.data.percentage_increase < 0 ? "+0.50%": "-0.50%"}</Grid>
                          </Grid>
                        </Grid>
                        <Grid item className="small_ana_number">
                          {analyticsData.data.total_post_visit}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      {analyticsData.data.percentage_increase < 0 ? (
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
                      {analyticsData.data.total_no_of_applicants}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid container direction="row">
                    <Grid item className="analytics_headings">
                      ShortListed candidates:
                    </Grid>
                    <Grid item className="analytics_subheadings">
                      {analyticsData.data.total_shortlisted_candidates}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item className="analytics_headings">
                      Interviewed candidates:
                    </Grid>
                    <Grid item className="analytics_subheadings">
                      {analyticsData.data.total_interviewed_candidates}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item className="analytics_headings">
                      Hired candidates:
                    </Grid>
                    <Grid item className="analytics_subheadings">
                      {analyticsData.data.hired_candidates}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="small_ana_number3">
              {" "}
              {analyticsData.data.conversion_rate}%
            </Grid>
          </Grid>
        </Grid>

        {/* COntainer for trends */}
        {/* <Grid item className="conversion_container">
          <Grid container direction="column">
            <Grid item className="conversion_topic">
              Trends
            </Grid>
            <Grid item>
              <Grid container direction={"row"} justifyContent="space-around">
                <Grid item>
                  **Pie chart goes here** */}
                  {/* <Pie data={jobdiversitydata} /> */}
                {/* </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item className="trends_topic">
                      {" "}
                      Job Diversity
                    </Grid>
                    <br />
                    {analyticsData.data.job_diversity.map((val) => (
                      <Grid container direction="row">
                        <Grid item className="analytics_headings">
                          {"fdsfsd"}:
                        </Grid>
                        <Grid item className="analytics_subheadings">
                          {" "}
                          {"fdsjfsd"}
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <br />
            <br /> */}
            {/* LOcation tren */}
            {/* <Grid item>
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
            <br /> */}
            {/* Age trend */}
            {/* <Grid item>
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
        </Grid> */}
      </Grid>
    </Grid>
  );
  }
  
}

export default CompanyAnalytics;
