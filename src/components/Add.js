import React, { useRef, useState } from 'react'

export default function Add() {
    const [ShowForm, SetShowForm] = useState(false);
    const [Tools, setTools] = useState([])
    const ToolsRef = useRef()
    const [view, SetView] = useState(null)

    const ProjectRef = useRef()
    const imageRef = view;
    const descriptionRef = useRef()
    const githubRef = useRef()
    const linkRef = useRef()



    const handelAdd = () => {
        if (ToolsRef.current.value) {
            const Newtool = {
                id: Tools.length + 1,
                tool: ToolsRef.current.value
            }
            ToolsRef.current.value = ''
            setTools([...Tools, Newtool])
        }

    }
    const delBtn = (i) => {
        const remove = Tools.filter((item) => i !== item.id)
        setTools(remove)
    }

    const ViewHandel = (e) => {
        if (e.target.files["0"].type === "image/jpeg") {
            SetView(e.target.files["0"])
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append("Project", ProjectRef.current.value)
        data.append("Image", imageRef)
        data.append("Description", descriptionRef.current.value)
        data.append("Github", githubRef.current.value)
        data.append("Link", linkRef.current.value)
        
        fetch('http://localhost:3000/upload.php', {
            method: 'POST',
            body: data
        })
        .then(response => {
            console.log('Success:', response);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <button onClick={() => SetShowForm(!ShowForm)} className='add-btn'><i class={ShowForm ? "fa-solid fa-right-from-bracket" : "fa-solid fa-folder-plus"} ></i></button>
            {ShowForm ?
                <div className='bg-form'>

                    <form onSubmit={handelSubmit}>
                        <div>
                            <label htmlFor="">Project Name</label>
                            <input ref={ProjectRef} type="text" />
                        </div>
                        <div className='image-file'>
                            <div>
                                <label htmlFor="">Image</label>
                                <input className='file' type="file" onChange={ViewHandel} />
                            </div>
                            <div className='main-img'>
                                {view ?
                                    <img src={URL.createObjectURL(view)} alt="" />
                                    :
                                    ""
                                }

                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Description</label>
                            <textarea ref={descriptionRef} name="Description"></textarea>
                        </div>
                        <div>
                            <label htmlFor="">Github</label>
                            <input ref={githubRef} type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Link</label>
                            <input ref={linkRef} type="text" />
                        </div>
                        <div className='tools'>
                            <label htmlFor="">Tools</label>
                            <div className='list-tools'>
                                {Tools.map((i) => {
                                    return (
                                        <samp key={i.id}>
                                            <b onDoubleClick={() => delBtn(i.id)}>{i.tool}</b>
                                        </samp>
                                    )
                                })}

                            </div>
                            <div className='tools-btn'>
                                <input ref={ToolsRef} type="text" />
                                <button type='button' onClick={handelAdd}>Add</button>
                            </div>

                        </div>
                        <div>
                            <button className='submit' type='submit'>Send</button>
                        </div>
                    </form>
                </div>
                : ""}
        </div>
    )
}
