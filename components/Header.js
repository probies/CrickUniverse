import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import '.././node_modules/nprogress/nprogress.css';
import Search from './blog/Search';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink className="font-weight-bold text-black">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink className="text-black active">News</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
            <React.Fragment>
              <NavItem>
                <Link href="/categories/series">
                  <NavLink className="text-black active">Series</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
            <React.Fragment>
              <NavItem>
                <Link href="/categories/fantasyxi">
                  <NavLink className="text-black active">FantasyXI</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>
            <React.Fragment>
              <NavItem>
                <Link href="/categories/schedule">
                  <NavLink className="text-black active">Schedule</NavLink>
                </Link>
              </NavItem>
            </React.Fragment>


            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink className="text-black active">{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink className="text-black active" style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                  Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <Search />
    </React.Fragment>
  );
};

export default Header;
