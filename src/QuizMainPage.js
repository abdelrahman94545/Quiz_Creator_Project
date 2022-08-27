import React, { useState } from "react";
import {  Routes, Route } from 'react-router-dom';
import QuizsList from './QuizsList';
import AddQuiz from './AddQuiz';
import EditQuiz from "./EditQuiz";
import StartQuiz from "./StartQuiz";


const QuizMainPage=()=>{
    const [Quizs, setQuizs] = useState([]);
    const [editKey, setEditKey] = useState();

    return(
        <div>
            <Routes>
                <Route path='/' element={<QuizsList edit={setEditKey}   QuizsListData={Quizs}/>}/>
                <Route path='/AddQuiz' element={<AddQuiz addQuizData={setQuizs}/>} />
                <Route path='/EditQuiz' element={<EditQuiz editVal={editKey} editQuizsListData={Quizs}/>} />
                <Route path='/StartQuiz' element={<StartQuiz  editVal={editKey} QuizsListDataStart={Quizs}/>} />
            </Routes>

            
        </div>
    );
}

export default QuizMainPage;