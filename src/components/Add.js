import React from 'react'

export default function Add() {
    const addBtn = () => {

    }
  return (
    <div>
        <button onClick={addBtn} className='add-btn'><i class="fa-solid fa-folder-plus"></i></button>

        <div className='bg-form'>
            <form action="">
                <div>
                    <label htmlFor="">Project Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Image</label>
                    <input className='file'  type="file" />
                </div>
                <div>
                    <label htmlFor="">Github</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Link</label>
                    <input type="text" />
                </div>
                <div className='tools'>
                    <label htmlFor="">Tools</label>
                    <div className='list-tools'>
                        <b>Css</b>
                        <b>Css</b>
                        <b>Css</b>
                    </div>
                    <div className='tools-btn'>
                    <input type="text" />
                    <button>Add</button>
                    </div>

                </div>
                <div>
                    <button className='submit' type='submit'>Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}
