import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import moment from "moment";

const EditQuiz=(props)=>{
    const [editQuiz,setEditQuiz]= useState();
    const navigate = useNavigate();


    useEffect(()=>{
        const quizData= props.editQuizsListData.filter(quiz=>{
            return quiz.id === props.editVal
        })        
        setEditQuiz(quizData)
    },[])

    const onChangeEditQuizInputs=(e)=>{

      
        let newArr = [...editQuiz];
   
        for (var key of Object.keys(newArr[0])) {
          
             if(key !== "answers_Q1" && key !== "answers_Q2")
                {

                    newArr[0][key === e.target.name? e.target.name: null ]= e.target.value
                    setEditQuiz(newArr);
                 } else
                 {
                    
                    }
                   
                    if(key === "answers_Q1") 
                    {

                    if(e.target.name === "answer1_Q1")
                    {
                        newArr[0][key][0][0]= e.target.value
                    }

                    if(e.target.name === "answer1_Q1_istrue")
                    {
                        newArr[0][key][0][1]= e.target.value
                    }

                    if(e.target.name === "answer2_Q1")
                    {
                        newArr[0][key][1][0]= e.target.value
                    }

                    if(e.target.name === "answer2_Q1_istrue")
                    {
                        newArr[0][key][1][1]= e.target.value
                    }

                    if(e.target.name === "answer3_Q1")
                    {
                        newArr[0][key][2][0]= e.target.value
                    }

                    if(e.target.name === "answer3_Q1_istrue")
                    {
                        newArr[0][key][2][1]= e.target.value
                    }

                    if(e.target.name === "answer4_Q1")
                    {
                        newArr[0][key][3][0]= e.target.value
                    }

                    if(e.target.name === "answer4_Q1_istrue")
                    {
                        newArr[0][key][3][1]= e.target.value
                    }

                 }
                 else if(key === "answers_Q2")
                    {

                        if(e.target.name === "answer1_Q2")
                        {
                            newArr[0][key][0][0]= e.target.value
                        }

                        if(e.target.name === "answer1_Q2_istrue")
                        {
                            newArr[0][key][0][1]= e.target.value
                        }

                        if(e.target.name === "answer2_Q2")
                        {
                            newArr[0][key][1][0]= e.target.value
                        }

                        if(e.target.name === "answer2_Q2_istrue")
                        {
                            newArr[0][key][1][1]= e.target.value
                        }

                        if(e.target.name === "answer3_Q2")
                        {
                            newArr[0][key][2][0]= e.target.value
                        }

                        if(e.target.name === "answer3_Q2_istrue")
                        {
                            newArr[0][key][2][1]= e.target.value
                        }

                        if(e.target.name === "answer4_Q2")
                        {
                            newArr[0][key][3][0]= e.target.value
                        }

                        if(e.target.name === "answer4_Q2_istrue")
                        {
                            newArr[0][key][3][1]= e.target.value
                        }
                    } 
                        
                }
       
    }

    const EditQuizFun=(e)=>{
        e.preventDefault();
        navigate('/', {replace: true})
    }

    return(
        <div>
            {  editQuiz !== undefined && editQuiz[0] !== undefined? <div>

                <input placeholder="discraption" name="discraption" onChange={e=>onChangeEditQuizInputs(e)} value={editQuiz[0].discraption}/>

                <input placeholder="question1" name="question1" onChange={onChangeEditQuizInputs} value={editQuiz[0].question1}/>
                <input placeholder="answer1_Q1" name="answer1_Q1" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q1[0][0]}/>
                <input placeholder="answer1_Q1_istrue" name="answer1_Q1_istrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q1[0][1]}/>
                <input placeholder="answer2_Q1" name="answer2_Q1" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q1[1][0]}/>
                <input placeholder="answer2_Q1_istrue" name="answer2_Q1_istrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q1[1][1]}/>
                <input placeholder="answer3_Q1" name="answer3_Q1" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q1[2][0]}/>
                <input placeholder="answer3_Q1_istrue" name="answer3_Q1_istrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q1[2][1]}/>
                <input placeholder="answer4_Q1" name="answer4_Q1" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q1[3][0]}/>
                <input placeholder="answer4_Q1_istrue" name="answer4_Q1_istrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q1[3][1]}/>

                <input placeholder="question2" name="question2" onChange={onChangeEditQuizInputs} value={editQuiz[0].question2}/>
                <input placeholder="answer1_Q2" name="answer1_Q2" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q2[0][0]}/>
                <input placeholder="answer1_Q2_istrue" name="answer1_Q2_istrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q2[0][1]}/>
                <input placeholder="answer2_Q2" name="answer2_Q2" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q2[1][0]}/>
                <input placeholder="answer2_Q2_istrue" name="answer2_Q2_istrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q2[1][1]}/>
                <input placeholder="answer3_Q2" name="answer3_Q2" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q2[2][0]}/>
                <input placeholder="answer3_Q2_istrue" name="answer3_Q2_istrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q2[2][1]}/>
                <input placeholder="answer4_Q2" name="answer4_Q2" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q2[3][0]}/>
                <input placeholder="answer4_Q2_istrue" name="answer4_Q2_istrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].answers_Q2[3][1]}/>

                <input placeholder="title" name="title" onChange={onChangeEditQuizInputs} value={editQuiz[0].title}/>
                <input  placeholder="youtube" name="youtube" onChange={onChangeEditQuizInputs} value={editQuiz[0].youtube}/>
                <input placeholder="fbTrue" name="fbTrue" onChange={onChangeEditQuizInputs} value={editQuiz[0].fbTrue}/>
                <input placeholder="fbFalse" name="fbFalse" onChange={onChangeEditQuizInputs} value={editQuiz[0].fbFalse}/>
                <button onClick={EditQuizFun}>Edit</button>
            
                </div> :null}
        </div>
    );
}

export default EditQuiz;