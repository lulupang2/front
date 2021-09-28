import Editor from "./editor";
import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";


const Write = () => {

    const [id, setId] = useState(0);
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState('');
    const [tags, setTags] = useState([]);

    const subjectHandler = (e) => {
        setSubject(e.currentTarget.value);
    }

    const nameHandler = (e) => {
        setName(e.currentTarget.value);
    }

    const bodyHandler = (e) => {
        setBody(e.currentTarget.value);
    }
    const tagsHandler = (e) => {
        setTags(e.currentTarget.value);
        

    }
    const submitHandler = (e) => {
        e.preventDefault()

        const data = {
            subject: subject,
            name: name,
            body: body,
            tags: tags
            
        }
        axios.post('/api/board', data)
            .then(res => console.log(res.data))
            .catch(err => {
                console.error(err);
            });
        
    }



    return (
        <div>
            <form className="w-full px-3 py-3" onSubmit={submitHandler}>
                <div className="flex items-center border-b border-teal-500 py-2 px-3 my-5">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="제목" aria-label="subject" value={subject} onChange={subjectHandler} />
                </div>
                <div className="w-48 border-b border-teal-500 py-2 px-3 my-5">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="작성자" aria-label="Name" value={name} onChange={nameHandler} />
                </div>
                <Editor value={body} onChange={bodyHandler} />
                <div className="flex items-center border-b border-teal-500 py-2 px-3">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text" placeholder="태그 입력 쉼표(,)로 구분해주세요" aria-label="tags" value={[tags]} onChange={tagsHandler} />
                </div>
                <div className="items-center my-1 py-2 px-3">

                    <Link to="/write">
                        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-5 border rounded " type="submit" onClick={submitHandler}>
                            저장
                        </button>

                    </Link>
                </div>
            </form>

        </div>
    )
}

export default Write
