import React from 'react'

export default function Form(props){
    const {form, update, submit}=props

    const handleSubmit =event=>{
        event.preventDefault()
        submit()
    }

    const handleChange=event=>{
        const{name, value}=event.target
        update(name, value)
    }

    return (
        <form className='form container' onSubmit={handleSubmit}>
            <div className='form inputs'>

                <label>
                    Name 
                    <input
                        type='text'
                        name='name'
                        placeholder='Team member name?'
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        placeholder='Team member email?'
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Role 
                    <select name='role' value={form.value} onChange={handleChange}>
                        <option value=''>-Team Member Role</option>
                        <option value='23'>WEBPT23</option>
                        <option value='25'>WEBPT25</option>
                        <option value='27'>WEBPT27</option>
                    </select>
                </label>
            </div>

            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    )
}