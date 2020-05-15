import React, { useContext } from "react"
import { navigate } from "gatsby"

import { FirebaseContext } from "../Firebase"
import { WrapHeader } from "./styles.js"
import Container from "../../objects/Container"
import Brand from "../../objects/Brand"
import UserStatus from "../../objects/UserStatus"
import LogoutLink from "../../objects/LogoutLink"
import PageLink from "../../objects/PageLink"

const Header = () => {

   const { firebase, user } = useContext(FirebaseContext)
   console.log("USER :", user)

   const handleLogoutClick = () => {
      firebase.logout().then(() => navigate("/login"))
   }

   return (
      <WrapHeader>
         <Container>
            <Brand brandTitle="Minha Biblioteca Digital"/>
            {!!user && !!user.email && 
               <UserStatus>
                  Hello, {user.username || user.email}
                  <LogoutLink onClick={handleLogoutClick}>
                     Logout
                  </LogoutLink>
               </UserStatus>
            }
            {(!user || !user.email) &&
               <UserStatus>
                  <div style={{ display: "flex" }}>
                     <PageLink topage="/login">Login</PageLink>
                     <span style={{ margin: "0 10px" }}> | </span>
                     <PageLink topage="/register">Register</PageLink>
                  </div>
               </UserStatus>
         }
         </Container>            
      </WrapHeader>
   )
}

export default Header