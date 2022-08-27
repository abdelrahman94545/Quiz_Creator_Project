import React, { useState, useEffect } from "react";



const StartQuiz=(props)=>{

    const [startData, setStartData]= useState();
    const [NextVal, setNextVal]= useState(0);
    const [answerArr, setAnswerArr]= useState();
    const [answerArrIsTrue, setAnswerArrIsTrue]= useState();
    const [scoreRecords, setScoreRecords]= useState();
    const [finalScore, setFinalScore]= useState();

    useEffect(()=>{
        let arrAnswer=[]
        let arrIsTrue=[]

        const quizDataStart= props.QuizsListDataStart.filter(quiz=>{
            return quiz.id === props.editVal
        })        

        setStartData(quizDataStart)

        arrAnswer.push(quizDataStart[0].answers_Q1[0][0])
        arrAnswer.push(quizDataStart[0].answers_Q1[1][0])
        arrAnswer.push(quizDataStart[0].answers_Q1[2][0])
        arrAnswer.push(quizDataStart[0].answers_Q1[3][0])

        arrAnswer.push(quizDataStart[0].answers_Q2[0][0])
        arrAnswer.push(quizDataStart[0].answers_Q2[1][0])
        arrAnswer.push(quizDataStart[0].answers_Q2[2][0])
        arrAnswer.push(quizDataStart[0].answers_Q2[3][0])

        arrIsTrue.push(quizDataStart[0].answers_Q1[0][1])
        arrIsTrue.push(quizDataStart[0].answers_Q1[1][1])
        arrIsTrue.push(quizDataStart[0].answers_Q1[2][1])
        arrIsTrue.push(quizDataStart[0].answers_Q1[3][1])

        arrIsTrue.push(quizDataStart[0].answers_Q1[0][1])
        arrIsTrue.push(quizDataStart[0].answers_Q2[1][1])
        arrIsTrue.push(quizDataStart[0].answers_Q2[2][1])
        arrIsTrue.push(quizDataStart[0].answers_Q2[3][1])

        setAnswerArr(arrAnswer)
        setAnswerArrIsTrue(arrIsTrue)
    },[])

    const NextBtnFun=()=>{
        if(NextVal <=2)
        {
        setNextVal(NextVal + 1);
        }

        if(NextVal === 2)
        {
            let total=0

            if(finalScore.answer1_Q1 === "true")
            {
                total=total + 1
            }

            if(finalScore.answer1_Q2 === "true")
            {
                total=total + 1
            }

            setScoreRecords(total)
  
        let newArrScore = [...startData];
        newArrScore[0]["score"]= total
        setStartData(newArrScore);
        }
        
    }

    const answerCheckFun=(e)=>{
 
        setFinalScore((prevState) => ({
            ...prevState,
             [e.target.name]:e.target.value,
        }));
        
    }

    return(
        <div>
            {startData && NextVal=== 0?
            <div>
                <h2> {startData[0].title}</h2>
                <br/>
                <p>{startData[0].discraption}</p>
                <br/>
               
                <iframe width="200" height="200" src={startData[0].youtube}></iframe>
                </div>
            :null}

            {startData && NextVal=== 1?
                <div>
                    <h3>{startData[0].question1}</h3>
                    <br/>

                    {<div>
                        <input  type="radio" id="vehicle1"  name="answer1_Q1" value={answerArrIsTrue[0]}  onClick={e=>answerCheckFun(e)}/>
                        <label htmlFor="vehicle1"> {answerArr[0]}</label>

                        <input  type="radio" id="vehicle2"  name="answer1_Q1" value={answerArrIsTrue[1]} onClick={e=>answerCheckFun(e)}/>
                        <label htmlFor="vehicle2"> {answerArr[1]}</label>

                        <input  type="radio" id="vehicle3"  name="answer1_Q1" value={answerArrIsTrue[2]} onClick={e=>answerCheckFun(e)}/>
                        <label htmlFor="vehicle3"> {answerArr[2]}</label>

                        <input  type="radio" id="vehicle4"  name="answer1_Q1" value={answerArrIsTrue[3]} onClick={e=>answerCheckFun(e)}/>
                        <label htmlFor="vehicle4"> {answerArr[3]}</label>
                    </div>
                    }
                  
                </div>
            :null}

            {startData && NextVal=== 2?
                <div>
                    <h3>{startData[0].question2}</h3>
                    <br/>

                    {<div>
                        <input  type="radio" id="vehicle5"  name="answer1_Q2" value={answerArrIsTrue[4]} onClick={e=>answerCheckFun(e)}/>
                        <label htmlFor="vehicle5"> {answerArr[4]}</label>

                        <input  type="radio" id="vehicle6"  name="answer1_Q2" value={answerArrIsTrue[5]} onClick={e=>answerCheckFun(e)}/>
                        <label htmlFor="vehicle6"> {answerArr[5]}</label>

                        <input  type="radio" id="vehicle7"  name="answer1_Q2" value={answerArrIsTrue[6]} onClick={e=>answerCheckFun(e)}/>
                        <label htmlFor="vehicle7"> {answerArr[6]}</label>

                        <input  type="radio" id="vehicle8"  name="answer1_Q2" value={answerArrIsTrue[7]} onClick={e=>answerCheckFun(e)}/>
                        <label htmlFor="vehicle8"> {answerArr[7]}</label>
                    </div>
                    }
                  
                </div>
            :null}

            {NextVal=== 3? <p>score = {scoreRecords}</p> : null}

                <button disabled={NextVal === 3? true:false} onClick={NextBtnFun}>Next</button>
        </div>
    );
}

export default StartQuiz;