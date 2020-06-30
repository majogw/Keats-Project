import React from 'react';
import {useHistory} from 'react-router-dom';

const Index = () => {
  const [hover,sethover]=useState(false);
  const classes = useStyles();
  return(
  <div className={classes.floatBtn}>
    <Fab onMouseOver={()=>sethover(true)} 
     onMouseOut={()=>sethover(false)} 
     size="small" color="secondary" aria-label="add" 
     className={classes.iconHover}>
          {hover?:("some text"):(<AddIcon />)
        </Fab>
  </div>
)};

    
   