import React, { useState } from "react";
import ReactQuill from "react-quill";
//UI
import "react-quill/dist/quill.snow.css";
function Editor() {
    const [value, setValue] = useState("");
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" }
            ],
            ["link", "image"],
            ["clean"]
        ]
    };
    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image"
    ];
    //CSS Styles
    const styles = {
        color: "#333",
        backgroundColor: "white",
        height: "600px"
    };
    return (
        <div style={{ height: "650px" }}>
        <ReactQuill
            theme="snow"
            modules={modules}
            style={styles}
            formats={formats}
            value={value}
            onChange={setValue}
            
            />
        </div>);
}
export default Editor;
