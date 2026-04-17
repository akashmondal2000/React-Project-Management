import React from 'react'

const NewProject = () => {
  return (
    <div>
        <menu>
            <li><button>Cancle</button></li>
            <li><button>Save</button></li>
        </menu>

        <div>
            <p>
                <label>Title</label>
                <input />
            </p>

            <p>
                <label>Description</label>
                <textarea />
            </p>
            <p>
                <label>Due Date</label>
                <input />
            </p>
        </div>
    </div>
  )
}

export default NewProject