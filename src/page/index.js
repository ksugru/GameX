import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Auth from '../auth/Auth';
import Header from '../component/Header';
import Todo from "../Todo";
import Main from '../mainpage/Main';

const Page = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Todo />} />



            </Routes>
        </BrowserRouter>
    )

}

export default Page