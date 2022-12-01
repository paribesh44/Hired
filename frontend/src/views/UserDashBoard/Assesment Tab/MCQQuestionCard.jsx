import React, { useState, useEffect } from "react";
import { questionsdummy } from "./dummyfiles/questionsdummy";

// import { mcqquestions } from './dummyfiles/mcqquestions';
import CustomButton from "../../../components/Buttons";
import { Link } from "react-router-dom";
import callAPI from "../../../utils/callAPI";
import useAPI from "../../../utils/useAPI";
import { Navigate } from "react-router-dom";
import { Grid, IconButton } from "@mui/material";

function MCQQuestionCard(props) {
  const target_field_id = props.target_field_id;
  const myArrray = ["sdss", , "ddd"];
  const [showFinalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [selectedans, setselecredans] = useState("");
  const [targetfield, settargetfield] = useState("");
  const [chosenn, setchosenn] = useState([]);
  const [changeLocation, setChangeLocation] = React.useState(false);

  const [listofselected, setlistofselected] = useState({
    target_field_id: "",
    chosen_answers: [],
    visibility: false,
  });

  // function retakebutton(){
  //     setFinalResult(false);
  //     setScore(0);
  //     setcurrentQuestion(0);

  // }

  const [mcqquestions, setResult] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: `/mcq/get_mcq_only/${target_field_id}`,
    });
    console.log(response_obj.data);
    setResult(response_obj.data);
  };
  const [hamlaiChanineID, setHamlaiCHaineID] = useState(null);

  const defaultSelectArray = [0, 0, 0, 0];
  const [nextClickedCheck, onClicked] = useState(false);
  const [selectArray, onSelectArray] = useState(defaultSelectArray);

  useEffect(() => {
    message();
  }, []);

  const optionClicked = (isCorrect, id, index) => {
    var temp = defaultSelectArray;
    // console.log(isCorrect)

    setselecredans(isCorrect);
    settargetfield(id);

    temp[index] = 1;
    onSelectArray([temp]);

    // onClicked(!clicked);

    // setselecredans(myArrray=>[...myArrray, isCorrect]

    //     prevdata=>{
    //     return{
    //         selectedans: [...prevdata.selectedans, 'isCorrect']

    //     }
    // // }
    // )

    // if (isCorrect){
    //             setScore(score+1);
    //         }
  };
  const nextClicked = () => {
    setchosenn((prev) => [...prev, selectedans]);
    // setchosenn([...chosenn,selectedans])
    // console.log(chosenn)

    // setlistofselected(prevState => ({...prevState,
    //     target_field_id: targetfield,
    //     chosen_answers:chosenn,
    //     visibility:true}))
    // console.log(listofselected)

    // console.log(selectedans)
    // console.log(listofselected)
    // let copyfoo=
    // setlistofselected( [selectedans,...listofselected] )
    // console.log(listofselected)

    if (currentQuestion + 1 < mcqquestions.mcq.length) {
      setcurrentQuestion(currentQuestion + 1);
    } else {
      setFinalResult(true);
    }
  };

  const FinishClicked = async () => {
    // console.log(chosenn)
    var information = {
      target_field_id: props.target_field_id,
      chosen_answers: chosenn,
    };

    let response_obj = await callAPI({
      endpoint: "/userAssesment/create",
      method: "POST",
      data: information,
    });

    if (true) {
      console.log("dhasjkdahs");
      setChangeLocation(true);
    }
  };

  if (mcqquestions != null) {
    return (
      <div>
        {changeLocation && <Navigate to="/ListDoneAssesment" />}
        {showFinalResult ? (
          <div className="final-results">
            <div className="mcqcompleteheading">MCQ Complete</div>
            <div className="mcqcompletesub">{props.target_field_name}</div>
            <CustomButton
              addStyles={"accept-button"}
              name="Finish"
              onClicked={() => FinishClicked()}
            />
          </div>
        ) : (
          <div className="mcq-main">
            <div>
              <div className="mcq-number">
                Question {currentQuestion + 1}/ {mcqquestions.mcq.length}
              </div>
              <div className="mcq-question">
                {" "}
                {mcqquestions.mcq[currentQuestion].question}
              </div>

              <ul className="mcq-unordered">
                {mcqquestions.mcq[currentQuestion].answers.map((option, id) => {
                  return (
                    <li
                      onClick={() => {
                        optionClicked(
                          option,
                          mcqquestions.mcq[currentQuestion].target_field_id,
                          id
                        );
                        setHamlaiCHaineID(id);
                      }}
                      key={option}
                    >
                      {console.log(hamlaiChanineID)}
                      <Grid
                        className={
                          selectArray[hamlaiChanineID] === 1
                            ? "mcq-option-clicked"
                            : "mcq_option"
                        }
                      >
                        {option}
                        {console.log(selectArray)}
                        {/* {console.log(id)} */}
                      </Grid>
                    </li>
                  );
                })}
              </ul>
            </div>
            <CustomButton
              addStyles={"accept-button"}
              name="Next"
              onClicked={() => {
                nextClicked();
                onSelectArray(defaultSelectArray);
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default MCQQuestionCard;
