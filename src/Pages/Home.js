import React,{useEffect, useState, useRef} from 'react'
import Hero from '../Components/Hero/Heroimg';
import Welcome from '../Components/Welcome/Welcome';
import Footer from '../Components/Footer/Footer';
function Home() {
    const [bio, setBio]=useState([]);
    const [posts, setPosts]=useState(0);
    let apiData = useRef(null);
    let sanad;
    const showpost=(e)=>{
        e.preventDefault();
        let postid=e.target.post.value;
        console.log(bio)
        setPosts(bio[postid]);
    }
    let data;
    const fetchData= async()=>{
        const response =await fetch('https://jsonplaceholder.typicode.com/posts');
        data =await response.json();
    };
    
    useEffect(async()=>{
        if(bio==0)
        { await fetchData();
            const setItem = async()=>{
                await setBio(data);
            }
            await setItem(data);
           
            apiData.current.innerText = data[0].title;}
    },[sanad]);
    return (
        <div>
            <Hero/>
            <Welcome/>
            <form onSubmit={(e)=>{showpost(e)}}>
            <input type="text" name="post"></input>
           <button type='submit'>post number</button>
            </form>
            
            <Footer/>
        </div>
    )
}

export default Home
