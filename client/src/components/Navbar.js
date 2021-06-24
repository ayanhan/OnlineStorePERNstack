import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'


const NavBar = observer(() => {
  const {user} = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Buy E</NavLink>
          {user.isAuth ?
              <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)}>Admin Panel</Button>
                <Button variant={"outline-light"} className="ml-2" onClick={() => logOut()}>Log Out</Button>
              </Nav>
              :
              <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
              </Nav>
          }
        </Container>
      </Navbar>
  );
});

export default NavBar;
