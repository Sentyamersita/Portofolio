// 
import React from 'react';
import { Link } from "react-scroll";
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import avatar from "../images/006.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },

    navbar_list: {
        marginTop: 15,
    },

    imageMeetup: {
        marginTop: 120,
        width: theme.spacing(18),
        height: theme.spacing(18),
      },
}));

export function Navbar() {
    // state = {};
    const classes = useStyles();
    // render() {
        return (
            <div className="navbar">
                <Avatar src={avatar} className={classes.imageMeetup} variant="circle"></Avatar>
                 <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={classes.navbar_list}
                >ABOUT</Link>

                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={classes.navbar_list}
                >EXPERIENCE</Link>

                <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={classes.navbar_list}
                >EDUCATION</Link>

                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={classes.navbar_list}
                >SKILLS</Link>

                <Link
                    activeClass="active"
                    to="interests"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={classes.navbar_list}
                >INTERESTS</Link>

                <Link
                    activeClass="active"
                    to="awards"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={230}
                    className={classes.navbar_list}
                >AWARDS</Link>
            </div>
        );
    // }
}

export default Navbar;