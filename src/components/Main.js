import React from 'react'

import {BrowserRouter as Router,  Routes, Route, Navigate } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './screens/Home'

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class Main extends React.Component {

    render(){

        return(
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

        )
    }
}
