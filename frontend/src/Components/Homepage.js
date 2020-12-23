import React, { useEffect, useState } from "react";
import { getTokenFromResponse } from "./SpotifyAuth";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import axios from 'axios';
import "./Login.css";
import Login from "./Login";
import { connect } from "react-redux"
import { updateToken, } from "../redux/Token/token.actions";
import Dashboard from './Dashboard';


const useStyles = makeStyles((theme) => ({
    sidepanel: {
        width: '100%',
        maxWidth: 650,
        backgroundColor: theme.palette.background.gray,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 500,
      },
      listSection: {
        backgroundColor: 'inherit',
      },
      ul: {
        backgroundColor: 'inherit',
        padding: 0,
      },
}));



function Homepage(props) {
    const [ token , setToken ] = useState(null);

    const classes = useStyles();

    useEffect(() => {
      // Set token
      const hash = getTokenFromResponse();
      window.location.hash = "";
      let token = hash.access_token;
  
      if (token) {
        setToken(token);
      }

      const fetchData = async () => {
        const result = await axios.post('/api/token/', token)
        .then(res => console.log(res))
      }
        if(token) {
          fetchData();
          props.updateToken(token)
        }
      console.log({token})


    },[]);

    function create_playlist(token) {
      axios.post('/api/playlist/create/', token)
      .then(res => console.log(res))
    }

    return(
        <div className="app">
        {
            token ? (
                // <div>
                //     <h1>WAWAWEEA -- GREAT SUCCESS!!!</h1>
                //     <h2>{token}</h2>
                //     <button onClick={() => create_playlist(token)}>Test</button>
                // </div>
                <div>
                  <Dashboard token = {token}/>
                </div>
            ):
            (<div>
                <Login/>
                <div id='section2'>
                        <div id='playlistlist'>BROWSE SOME PLAYLISTS:
                        <List className={classes.sidepanel}>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                            <ListItem button>Test</ListItem>
                        </List>
                    </div>
                <div id='about'>HOW IT WORKS</div>
              </div>
            </div>)
          }
      </div>
    );

}

    const mapStateToProps = state => {
      return {
        token: state.token.token,
      }
    }
    
    const mapDispatchToProps = dispatch => {
      return {
        updateToken: (token) => dispatch(updateToken(token)),
      }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);