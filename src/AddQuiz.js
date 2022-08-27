import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import moment from "moment";

const AddQuiz=(props)=>{
    const [formData, setFormData]= useState();
    const [createBtnLock, setCreateBtnLock]= useState(true);
    const [youtubeValidation, setYoutubeValidation]= useState();

    const navigate = useNavigate();
    


    const onChangeAddQuizInputs=(e)=>{
       
        if(e.target.name === "discraption")
        {
            setFormData((prevState)=>({
                ...prevState,
                discraption: e.target.value
            }))
        } else


        if(e.target.name === "question1")
        {
            setFormData((prevState)=>({
                ...prevState,
                question1: e.target.value
            }))
        } else
        if(e.target.name === "answer1_Q1")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer1_Q1: e.target.value
            }))
        } else
        if(e.target.name === "answer1_Q1_istrue")
        {
            
           
            
            setFormData((prevState)=>({
                ...prevState,
                answer1_Q1_istrue: e.target.value
            }))
            
        } else
        if(e.target.name === "answer2_Q1")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer2_Q1: e.target.value
            }))
        } else
        if(e.target.name === "answer2_Q1_istrue")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer2_Q1_istrue: e.target.value
            }))
        } else
        if(e.target.name === "answer3_Q1")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer3_Q1: e.target.value
            }))
        } else
        if(e.target.name === "answer3_Q1_istrue")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer3_Q1_istrue: e.target.value
            }))
        } else
        if(e.target.name === "answer4_Q1")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer4_Q1: e.target.value
            }))
        } else
        if(e.target.name === "answer4_Q1_istrue")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer4_Q1_istrue: e.target.value
            }))
        } else
// ///////////////

        if(e.target.name === "question2")
        {
            setFormData((prevState)=>({
                ...prevState,
                question2: e.target.value
            }))
        } else
        if(e.target.name === "answer1_Q2")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer1_Q2: e.target.value
            }))
        } else
        if(e.target.name === "answer1_Q2_istrue")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer1_Q2_istrue: e.target.value
            }))
        } else
        if(e.target.name === "answer2_Q2")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer2_Q2: e.target.value
            }))
        } else
        if(e.target.name === "answer2_Q2_istrue")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer2_Q2_istrue: e.target.value
            }))
        } else
        if(e.target.name === "answer3_Q2")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer3_Q2: e.target.value
            }))
        } else
        if(e.target.name === "answer3_Q2_istrue")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer3_Q2_istrue: e.target.value
            }))
        } else
        if(e.target.name === "answer4_Q2")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer4_Q2: e.target.value
            }))
        } else
        if(e.target.name === "answer4_Q2_istrue")
        {
            setFormData((prevState)=>({
                ...prevState,
                answer4_Q2_istrue: e.target.value
            }))
        }

// /////////////////
        if(e.target.name === "title")
        {
            setFormData((prevState)=>({
                ...prevState,
                title: e.target.value
            }))
        } else
        if(e.target.name === "youtube")
        {
            const reguExe= /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
            const test = reguExe.test(e.target.value);
           
            if(test)
            {
                setYoutubeValidation(false)
            setFormData((prevState)=>({
                ...prevState,
                youtube: e.target.value
            }))
            }
            else
            {
                setYoutubeValidation(true)
            }

        } else
        if(e.target.name === "fbTrue")
        {
            setFormData((prevState)=>({
                ...prevState,
                fbTrue: e.target.value
            }))
        } else
        if(e.target.name === "fbFalse")
        {
            setFormData((prevState)=>({
                ...prevState,
                fbFalse: e.target.value
            }))
        } 

        
    }

    const AddQuizFun=(e)=>{
        e.preventDefault();
        
        props.addQuizData((prevState)=>[
            ...prevState,
            {
            discraption:formData.discraption,
// ////////////
            question1: formData.question1,
            answers_Q1:[[
                formData.answer1_Q1,
                formData.answer1_Q1_istrue
            ],[
            
                 formData.answer2_Q1,
                 formData.answer2_Q1_istrue
            ],[
            
                 formData.answer3_Q1,
                 formData.answer3_Q1_istrue
            ],[
            
                formData.answer4_Q1,
                 formData.answer4_Q1_istrue]
            
            ],
// ///////////
            question2: formData.question2,
            answers_Q2:[[
                formData.answer1_Q2,
                formData.answer1_Q2_istrue
            ],[
            
                 formData.answer2_Q2,
                 formData.answer2_Q2_istrue
            ],[
            
                 formData.answer3_Q2,
                formData.answer3_Q2_istrue
            ],[
            
                 formData.answer4_Q2,
                 formData.answer4_Q2_istrue]
            
            ],
// ///////////
            title: formData.title,
            youtube: formData.youtube,
            fbTrue:formData.fbTrue,
            fbFalse: formData.fbFalse,
            id: Math.floor(Math.random() * 10000),
            created: moment().format('YYYY-MM-DD, h:mm:ss'),
            score: ""
        }])

        navigate('/', {replace: true})
    }

    return(
        <div>
            
                <input placeholder="discraption" name="discraption" onChange={onChangeAddQuizInputs} />

                <input placeholder="question1" name="question1" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer1_Q1" name="answer1_Q1" onChange={onChangeAddQuizInputs}/>
                <input  placeholder="answer1_Q1_istrue" name="answer1_Q1_istrue" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer2_Q1" name="answer2_Q1" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer2_Q1_istrue" name="answer2_Q1_istrue" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer3_Q1" name="answer3_Q1" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer3_Q1_istrue" name="answer3_Q1_istrue" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer4_Q1" name="answer4_Q1" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer4_Q1_istrue" name="answer4_Q1_istrue" onChange={onChangeAddQuizInputs}/>

                <input placeholder="question2" name="question2" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer1_Q2" name="answer1_Q2" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer1_Q2_istrue" name="answer1_Q2_istrue" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer2_Q2" name="answer2_Q2" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer2_Q2_istrue" name="answer2_Q2_istrue" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer3_Q2" name="answer3_Q2" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer3_Q2_istrue" name="answer3_Q2_istrue" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer4_Q2" name="answer4_Q2" onChange={onChangeAddQuizInputs}/>
                <input placeholder="answer4_Q2_istrue" name="answer4_Q2_istrue" onChange={onChangeAddQuizInputs}/>

                <input placeholder="title" name="title" onChange={onChangeAddQuizInputs}/>
                <input style={{ color: youtubeValidation ? 'red' : 'blue' }}  placeholder="youtube" name="youtube" onChange={onChangeAddQuizInputs}/>
                <input placeholder="fbTrue" name="fbTrue" onChange={onChangeAddQuizInputs}/>
                <input placeholder="fbFalse" name="fbFalse" onChange={onChangeAddQuizInputs}/>
                <button 
                disabled={formData && Object.keys(formData).length === 23
                    && Object.values(formData).every(obj => obj !== null && obj !== '') && !youtubeValidation? false:true}
                onClick={AddQuizFun}>Create</button>
            

        </div>
    );
}

export default AddQuiz;