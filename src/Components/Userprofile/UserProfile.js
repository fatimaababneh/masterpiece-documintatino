import React, {useState, useRef, useEffect} from 'react'
import "./UserProfile.css"

function UserProfile(props) {
    let [user, setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));
    let [edit, setEdit] = useState(false)
    let info = useRef(null);
    let editing = useRef(null);
    
    useEffect(() => {

    if(edit)
      {editing.current.style.display ="flex"
      info.current.style.display ="none"}
      else{
        editing.current.style.display ="none"
        info.current.style.display ="flex"
      }
    })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setUser({...user,[name]:value})

    }
 
    const handleData =(e)=>{                                                         
        let index = user.index;
        let lcl = JSON.parse(localStorage.getItem('allusers'));
        lcl[index] = user;
        localStorage.setItem("allusers",JSON.stringify(lcl));
        alert("Your info has been updated successfully")
        localStorage.setItem("loggedUser",JSON.stringify(lcl[index]))
        props.setLogged(JSON.parse(localStorage.getItem("loggedUser")))
        setEdit(false)

    }
    return (
        <>
        <div className='profileContainer'>
            <div ref={info} className='infoUser'>
                <p><span>User Name: </span><span>{user.username}</span></p>
                <p><span>Email Address: </span><span>{user.email}</span></p>
                <button onClick={()=>setEdit(true)} className='burnBtn'>Edit Info</button>
            </div>
            <div ref={editing} className='infoUser'>
            <div className="inputField">
        </div>
        <div className="inputField">
            <form onSubmit={handleData}>
                <label htmlFor="fname">
                    <p>Uaername:</p>
                <input onChange={handleChange} required type="fname" name="username" id="username" value={user.username}/>
                </label>
               
                <label htmlFor="password">
                    <p>Password:</p>
                <input required onChange={handleChange} type="password" name="password" id="password" placeholder='Enter a new password' />
                </label><br/>
                <div className='btns1'>
                <button id="cancel" className='burnBtn' onClick={()=>setEdit(false)} >Cancel</button>
                <button type="submit" className='burnBtn'  >Change</button>
                </div>
            </form>
        </div>
            </div>
        </div>
        </>
    )
}

export default UserProfile