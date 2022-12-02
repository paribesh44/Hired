import { Grid, Input } from "@mui/material";
import React from "react";
import CompanyNavbarIn from "../../components/CompanyNavbarIn";
import profileimg from "../../assets/demoprofileimage.jpg";
import "./profile.css";
import DropDown from "../../components/DropDown";
import Button from "../../components/Buttons";
import callAPI from "../../utils/callAPI";
import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import CustomButton from "../../components/Buttons";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ImCross } from "react-icons/im";
import companydummylogo from "../../assets/companydummylogo.jpg";

function CompanyProfile() {
  const location = useLocation();
  const { employer } = location.state;

  const [companyName, setCompanyName] = useState(employer.companyName);
  const [contactEmail, setContactEmail] = useState(employer.contactEmail);
  const [contactNumber, setContactNumber] = useState(employer.contactNumber);
  const [contactPerson, setContactPerson] = useState(employer.contactPerson);
  const [address, setAddress] = useState(employer.location);
  const [website, setWebsite] = useState(employer.website);
  const [description, setDescription] = useState(employer.description);
  const [vision, setVision] = useState(employer.vision);
  var [logo, setLogo] = useState(employer.logo);
  const [targetMarket, setTargetMarket] = useState(employer.targetMarket);

  const [visionEdit, setVisionEdit] = useState(false);
  const [descriptionEdit, setDescriptionEdit] = useState(false);
  const [changeLogo, setChangeLogo] = useState(false);
  const [changeLocation, setChangeLocation] = useState(false);

  const [targetMarketDropdown, setTargetMarketDropdown] = useState("");
  var [logoUpdate, setLogoUpdate] = useState("");

  let targetMarketOptions = [
    "AI",
    "ML",
    "DL",
    "Web development",
    "Mobile development",
    "Data Science",
  ];

  function handleChangeTargetMarket(e) {
    setTargetMarketDropdown(e.target.value);
    setTargetMarket([...targetMarket, e.target.value]);
    console.log(targetMarket);
  }

  function handleChangeLogo() {
    setChangeLogo(!changeLogo);
    setLogoUpdate("");
  }

  async function handleSaveChange() {
    if (logoUpdate != "") {
      logo = "";
    } else if (logoUpdate == "") {
      logoUpdate = "";
    }

    let dataForm = new FormData();
    dataForm.append("company_name", companyName);
    dataForm.append("location", address);
    dataForm.append("description", description);
    dataForm.append("website", website);
    dataForm.append("target_market", targetMarket);
    dataForm.append("vision", vision);
    dataForm.append("contact_number", contactNumber);
    dataForm.append("contact_email", contactEmail);
    dataForm.append("contact_person", contactPerson);
    dataForm.append("logo", logo);
    dataForm.append("logo_update", logoUpdate);
    dataForm.append("established_date", employer.established_date);

    let response_obj = await callAPI({
      endpoint: "/employer/update",
      method: "PUT",
      data: dataForm,
    });

    if (response_obj.data.msg == "success") {
      console.log("success");
      setChangeLocation(true);
    }
  }

  var company_logo = "";

  if(employer != null) {
    company_logo = `http://localhost:8000/${employer.logo}`;
  }

  return (
    <>
      <CompanyNavbarIn />
      {changeLocation && <Navigate to="/CompanyHome" />}
      <Grid container className="main_container">
        <Grid item>
          <h1 className="profile">Profile</h1>
          <p className="view">View and Edit your Profile</p>
          {!changeLogo ? (
            <div className="profileContainer1">
              <img src={employer != null ? company_logo : companydummylogo } />
              {/* <Image
                    className="border-left pl-2 ml-auto"
                    src={companyLogo != null ? company_logo : companydummylogo }
                  /> */}
              <div className="name">
                <h1>{employer.companyName}</h1>
                <p
                  style={{ color: "blueviolet", cursor: "pointer" }}
                  onClick={handleChangeLogo}
                >
                  CHANGE LOGO
                </p>
              </div>
            </div>
          ) : (
            <div>
              <Grid container>
                <div>
                  <label>Upload logo</label>
                </div>
              </Grid>

              <Grid container>
                <input
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    setLogoUpdate(event.currentTarget.files[0]);
                  }}
                />
              </Grid>
              <Grid item className="appliedicon_grid">
                <ImCross className="appliedicons" onClick={handleChangeLogo} />
              </Grid>
            </div>
          )}

          <div className="form">
            <div className="field_container">
              <Grid container columnSpacing={4}>
                <Grid item className="field" xs={4}>
                  <label>
                    Company Name
                    <br />
                    <Input
                      value={companyName}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                      fullWidth
                      placeholder="Jane Doe"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
                <Grid item className="field" xs={4}>
                  <label>
                    Address
                    <br />
                    <Input
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      fullWidth
                      placeholder="e.g. Kathmandu"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
                <Grid item className="field" xs={4}>
                  <label>
                    Contact Number
                    <br />
                    <Input
                      value={contactNumber}
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                      fullWidth
                      placeholder="e.g. 9841xxxxxx"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
                <Grid item className="field" xs={4}>
                  <label>
                    Contact Person
                    <br />
                    <Input
                      value={contactPerson}
                      onChange={(e) => {
                        setContactPerson(e.target.value);
                      }}
                      fullWidth
                      placeholder="e.g. John xxxx"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
                <Grid item className="field" xs={4}>
                  <label>
                    Contact Email
                    <br />
                    <Input
                      value={contactEmail}
                      onChange={(e) => {
                        setContactEmail(e.target.value);
                      }}
                      fullWidth
                      placeholder="e.g. xxxx@gmail.com"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
                <Grid item className="field" xs={4}>
                  <label>
                    Website
                    <br />
                    <Input
                      value={website}
                      onChange={(e) => {
                        setWebsite(e.target.value);
                      }}
                      fullWidth
                      placeholder="www.xyz.com"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
              </Grid>
            </div>
            <div className="field_container">
              <div className="role_container1">
                <div className="roles">
                  <h4>Target markets</h4>
                </div>
                <div className="roles_container">
                  {targetMarket.map((val) => {
                    return <div className="role">{val}</div>;
                  })}
                </div>
                <div className="select_roles">
                  <Select
                    sx={{ m: 1, minWidth: 380 }}
                    value={targetMarketDropdown}
                    onChange={handleChangeTargetMarket}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>Add new Target Market</em>
                    </MenuItem>
                    {targetMarketOptions.map((i) => (
                      <MenuItem value={i}>{i}</MenuItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <div>
              <h4>Vision</h4>
              {!visionEdit ? (
                <div className="vision">
                  <p style={{ fontSize: "15px" }}>{vision}</p>
                  <button
                    onClick={() => {
                      setVisionEdit(!visionEdit);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <Input
                  value={vision}
                  onChange={(e) => {
                    setVision(e.target.value);
                  }}
                  fullWidth
                  placeholder="e.g. Your vision"
                  variant="filled"
                  sx={{ background: "#EBEFF550", mt: 2, p: 1, margin: "2em" }}
                />
              )}
            </div>

            <div>
              <h4>Description</h4>
              {!descriptionEdit ? (
                <div className="vision">
                  <p style={{ fontSize: "15px" }}>{description}</p>
                  <button
                    onClick={() => {
                      setDescriptionEdit(!descriptionEdit);
                    }}
                  >
                    Edit
                  </button>
                </div>
              ) : (
                <Input
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  fullWidth
                  placeholder="e.g. Your vision"
                  variant="filled"
                  sx={{ background: "#EBEFF550", mt: 2, p: 1, margin: "2em" }}
                />
              )}
            </div>
            <Button
              name="Save Changes"
              addStyles={"save_changes"}
              onClick={handleSaveChange}
            ></Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default CompanyProfile;
