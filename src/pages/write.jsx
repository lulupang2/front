import Editor from "./editor";
import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

const Write = () => {

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);

    return (
        <>
            <form className="w-full px-3 py-3">
                <div className="flex items-center border-b border-teal-500 py-2 px-3 my-5">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="제목" aria-label="Title" />
                </div>
                <div className="w-48 border-b border-teal-500 py-2 px-3 my-5">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="작성자" aria-label="Name" />
                </div>
                <Editor />
                <div className="flex items-center border-b border-teal-500 py-2 px-3">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="태그 입력 쉼표(,)로 구분해주세요" aria-label="tags" />
                </div>
                <div className="items-center my-1 py-2 px-3">

                    <Link to="/write">
                        <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-5 border rounded ">
                            저장
                        </button>

                    </Link>
                </div>
            </form>

        </>
    )}

export default Write
