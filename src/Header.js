
import React, { useState } from "react";
import './Header.css';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { NavLink} from 'react-router-dom';


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
   
      text:<NavLink to="/" className='navv'>HOME</NavLink>,
      icon: <HomeIcon  className="navbar-cart-icon"/>,
    },
    {
      // text: "Home",
      text:<NavLink to="/programs" className='navv'>PROGRAHS</NavLink>,
      icon: <HomeIcon  className="navbar-cart-icon"/>,
    },
    {
      text:  <NavLink to="/classrooms" className='navv' activeClassName="active">CLASSROOMS</NavLink>,
      icon: <InfoIcon className="navbar-cart-icon" />,
    },
    {
      text: <NavLink to="/subjects" className='navv' activeClassName="active">SUBJECTS</NavLink>,
      icon: <CommentRoundedIcon className="navbar-cart-icon" />,
    },
    {
      
      text:<NavLink to="/profiles" className='navv' activeClassName="active">PROFILES</NavLink>,
      icon: <PhoneRoundedIcon className="navbar-cart-icon"/>,
    },
  
  ];


  return (
    <nav>
     <div>
      <h2 className="logo">AUTOTASKER</h2>
     </div>
      <div className="navbar-links-container">
            <NavLink to="/" className='navv'  activeClassName="active"><span>HOME</span></NavLink>
             <NavLink to="/programs" className='navv'  activeClassName="active"><span>PROGRAMS</span></NavLink>
              <NavLink to="/classrooms" className='navv' activeClassName="active"><span>CLASSROOMS</span></NavLink>
              <NavLink to="/subjects" className='navv' activeClassName="active"><span>SUBJECTS</span></NavLink>
              <NavLink to="/profiles" className='navv' activeClassName="active"><span>PROFILES</span></NavLink>
      </div>
      
      <div className="navbar-menu-container">
        <HiOutlineBars3 className="navbar-cart-icon" onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Header;
