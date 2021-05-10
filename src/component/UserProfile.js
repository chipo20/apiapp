import React from 'react'
import {useState,useEffect} from "react"
const UserProfile = (props) => {
    const [profile,setProfile] = useState([])
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id} `  )
      .then(response => response.json())
      .then(json => setProfile(json))
      .then(json => console.log(json))
    })
    return (
        <div>
        <h1> {profile.name} </h1> 
        <h1> {profile.email} </h1> 

        <h1>{
      profile && profile.address && profile.address.street }  { profile && profile.address && profile.address.suite } &nbsp;
       { profile && profile.address && profile.address.city } &nbsp; { profile && profile.address && profile.address.zipcode }
        

        </h1>
        </div>
    )
}

export default UserProfile
