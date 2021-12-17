import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AdminShowData from "./AdminShowData";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateDataPopForm from "./createDataPopForm";
import FolderIcon from "@material-ui/icons/Folder";
import EditDataPopForm from "./EditDataPopup";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
  import AccountCircle from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const { location } = window;

export default function AdminMain({
  showServices,
  navBar,
  heroBox,
  dataFeatures,
  aboutUs,
  testimonials,
  chooseus,
  addNewData,
  deleteFunction,
  setselectedMenuItemName,
  editDataForPopUp,
  setCurrentDeleteListId,
}) {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [adminShowDataProps, setAdminShowDataProps] = React.useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupEdit, setOpenPopupEdit] = useState(false);
  const [selectedMenuName, setselectedMenuName] = useState(null);
  const [selectedTitle, setTitle] = useState(null);
  const [selectedBody, setBody] = useState(null);
  const [selectedAlt, setAlt] = useState(null);
  const [SelectedIdForEdit, setSelectedIdForEdit] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showItemsIntable = (name) => {
    setselectedMenuName(name);
    setselectedMenuItemName(name);
    if (name === "Navbar") setAdminShowDataProps(navBar);
    else if (name === "heroBox") setAdminShowDataProps(heroBox);
    else if (name === "features") setAdminShowDataProps(dataFeatures);
    else if (name === "services") setAdminShowDataProps(showServices);
    else if (name === "aboutUs") setAdminShowDataProps(aboutUs);
    else if (name === "testimonials") setAdminShowDataProps(testimonials);
    else if (name === "chooseus") setAdminShowDataProps(chooseus);
  };
  // Open Popup
  const handleClickOpen = () => {
    setOpenPopup(true);
  };
  const handleClickOpenEdit = () => {
    setOpenPopupEdit(true);
  };
  const handleClose = () => {
    setOpenPopup(false);
  };
  const handleCloseEdit = () => {
    setOpenPopupEdit(false);
  };

  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    history.push("/login");
    location.reload();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ background: "#212121" }}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Qodit Admin Panel
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[
              "Navbar",
              "heroBox",
              "services",
              "features",
              "aboutUs",
              "testimonials",
              "chooseus",
            ].map((text, index) => (
              <ListItem
                button
                onClick={() => showItemsIntable(text)}
                name={text}
                key={text}
              >
                <ListItemIcon>
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  <FolderIcon style={{ color: "#f7d367" }} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <AdminShowData
            data={adminShowDataProps}
            addNewData={addNewData}
            handleClickOpenEdit={handleClickOpenEdit}
            deleteFunction={deleteFunction}
            setTitle={setTitle}
            setBody={setBody}
            setAlt={setAlt}
            setSelectedIdForEdit={setSelectedIdForEdit}
          />
        </main>
      </div>
      <div style={{ position: "absolute", right: "25px" }}>
        <label htmlFor="contained-button-file " className="addNewbtnClass">
          <Button
            variant="contained"
            onClick={() => handleClickOpen()}
            color="grey"
            component="span"
          >
            <AddIcon /> Add New
          </Button>
        </label>
      </div>
      <CreateDataPopForm
        handleClose={handleClose}
        openPopup={openPopup}
        addNewData={addNewData}
        selectedMenuName={selectedMenuName}
      />

      <EditDataPopForm
        handleCloseEdit={handleCloseEdit}
        openPopupEdit={openPopupEdit}
        selectedMenuName={selectedMenuName}
        selectedTitle={selectedTitle}
        selectedBody={selectedBody}
        selectedAlt={selectedAlt}
        SelectedIdForEdit={SelectedIdForEdit}
      />
    </>
  );
}
