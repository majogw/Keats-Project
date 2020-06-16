import React from 'react';
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function HeaderView (){
let location = useLocation();
console.log (location.pathname);
return <span>Path: {location.pathname}</span>
}