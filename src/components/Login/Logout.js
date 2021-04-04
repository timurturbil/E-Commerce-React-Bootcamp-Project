import React from 'react'

const Logout = ({handleLogout}) => {
    return (
       <section className="hero">
           <nav>
               <h4></h4>
               <button onClick={handleLogout}>Logout</button>
           </nav>

       </section>
    )
}

export default Logout
