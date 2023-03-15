import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import images from "../../public/assets/images/index";
import Image from "next/image";
import { Button, ButtonGroup } from "@mui/material";

export default function Header() {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   // <Menu
  //   //   anchorEl={mobileMoreAnchorEl}
  //   //   anchorOrigin={{
  //   //     vertical: "top",
  //   //     horizontal: "right",
  //   //   }}
  //   //   id={mobileMenuId}
  //   //   keepMounted
  //   //   transformOrigin={{
  //   //     vertical: "top",
  //   //     horizontal: "right",
  //   //   }}
  //   //   open={isMobileMenuOpen}
  //   //   onClose={handleMobileMenuClose}
  //   // >
  //   //   <MenuItem>
  //   //     <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //   //       <Badge badgeContent={4} color="error">
  //   //         <MailIcon />
  //   //       </Badge>
  //   //     </IconButton>
  //   //     <p>Messages</p>
  //   //   </MenuItem>
  //   //   <MenuItem>
  //   //     <IconButton
  //   //       size="large"
  //   //       aria-label="show 17 new notifications"
  //   //       color="inherit"
  //   //     >
  //   //       <Badge badgeContent={17} color="error">
  //   //         <NotificationsIcon />
  //   //       </Badge>
  //   //     </IconButton>
  //   //     <p>Notifications</p>
  //   //   </MenuItem>
  //   //   <MenuItem onClick={handleProfileMenuOpen}>
  //   //     <IconButton
  //   //       size="large"
  //   //       aria-label="account of current user"
  //   //       aria-controls="primary-search-account-menu"
  //   //       aria-haspopup="true"
  //   //       color="inherit"
  //   //     >
  //   //       <AccountCircle />
  //   //     </IconButton>
  //   //     <p>Profile</p>
  //   //   </MenuItem>
  //   // </Menu>
  // );

  return (
    <Box className="containor">
      <AppBar position="static">
        <Toolbar className="btn-containor">
          <Box className="logo-container">
            <div>
              <Image src={images.logo} />
            </div>
            <Typography
              className="logoName"
              variant="h6"
              noWrap
              component="div"
            >
              Robuy
            </Typography>
          </Box>

          <Box className="btn">
            <ButtonGroup className="btn2">
              <Button className="btn-group">
                {" "}
                <Image className="nav-icon" src={images.coin} />
                Купить робуксы
              </Button>
              <Button className="btn-group">
                {" "}
                <Image className="nav-icon" src={images.union} />
                Бесплатно
              </Button>
              <Button className="btn-group">
                {" "}
                <Image className="nav-icon" src={images.subtract} /> Мои Покупки
              </Button>
              <Button className="btn-group">
                {" "}
                <Image className="nav-icon" src={images.vector3} /> Промокод
              </Button>
              <Button className="btn-groupLast">
                {" "}
                <Image className="nav-icon" src={images.union2} /> Блог
              </Button>
            </ButtonGroup>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box className="icon-containor">
            <div>
              <Image src={images.Vector} />
            </div>

            <div className="twiter-box">
              <Image src={images.twiter} />
            </div>

            <Button className="btn-last">Войти</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box className="btn-none">
        <ButtonGroup>
          <Button className="btn-group2">
            {" "}
            <Image className="nav-icon2" src={images.coin} />
            Купить робуксы
          </Button>
          <Button className="btn-group">
            {" "}
            <Image className="nav-icon" src={images.union} />
            Бесплатно
          </Button>
          <Button className="btn-group">
            {" "}
            <Image className="nav-icon" src={images.subtract} /> Мои Покупки
          </Button>
          <Button className="btn-group">
            {" "}
            <Image className="nav-icon" src={images.vector3} /> Промокод
          </Button>
          <Button className="btn-groupLast">
            {" "}
            <Image className="nav-icon" src={images.union2} /> Блог
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
