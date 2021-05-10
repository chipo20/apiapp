import React from 'react'
import './UserCard.css'
import {Link} from "react-router-dom"

const UserCard = ({ user }) => {
    return (
        <div >

            <div class="container" >
                <div class="card">
                    <img src={"http://www.theparentalist.com/wp-content/uploads/2014/09/Leanne-Graham.png"} alt="Person" class="card__image"/>
                        <p class="card__name">{user.name}</p>
                        <div class="grid-container">

                            <div class="grid-child-posts">
                                
           </div>

                            <div class="grid-child-followers">
                                
      </div>

                        </div>
                      
                     <Link to={`/${user.id}`}>   <button class="btn draw-border">About Me</button></Link>
                        

  </div>
                   
                        </div>

                    </div>
    )
}

export default UserCard
