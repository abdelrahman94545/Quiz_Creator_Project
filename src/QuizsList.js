
import React from "react";
import { Link, NavLink } from 'react-router-dom';


const QuizsList=(props)=>{

    const QuizIdFun=(key)=>{
        props.edit(key)
    }
   
    return(
    <div>
        
        <Link to='/AddQuiz'>
            <button>add</button>
        </Link>
        <div>
            <NavLink to='/StartQuiz'>
            {
            props.QuizsListData !== [] && props.QuizsListData? props.QuizsListData.map((quizData)=>(
                
                 <div onClick={key=>QuizIdFun(quizData.id)} key={quizData.id} style={{width: "100px",backgroundColor: "#f00", margin: "20px"}}> 
                    Quiz
                    <br/>
                    {quizData.title}
                    <br/>
                    <Link to='/EditQuiz'><button onClick={key=>QuizIdFun(quizData.id)}>Edit</button></Link>
                        
                </div>
                
            )): null
            }
            </NavLink>
        </div>
    </div>
    );
}

export default QuizsList;