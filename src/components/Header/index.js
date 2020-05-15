import React, { useContext } from "react"
import { navigate } from "gatsby"

import { FirebaseContext } from "../Firebase"
import { WrapHeader } from "./styles.js"
import Container from "../../objects/Container"
import Brand from "../../objects/Brand"
import UserStatus from "../../objects/UserStatus"
import LogoutLink from "../../objects/LogoutLink"
import LoginLink from "../../objects/LoginLink"

const Header = () => {

   const { firebase, user } = useContext(FirebaseContext)
   console.log(firebase, user)

   const handleLogoutClick = () => {
      firebase.logout().then(() => navigate("/login"))
   }

   return (
      <WrapHeader>
         <Container>
            <Brand brandTitle="Minha Biblioteca Digital"/>
            {!!user && !!user.email && 
               <UserStatus>
                  Hello, {user.email}
                  <LogoutLink onClick={handleLogoutClick}>
                     Logout
                  </LogoutLink>
               </UserStatus>
            }
            {(!user || !user.email) &&
               <UserStatus>
                  <LoginLink linkto="/login">Login</LoginLink>
               </UserStatus>
            }
         </Container>            
      </WrapHeader>
   )
}

export default Header