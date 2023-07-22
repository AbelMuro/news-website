import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import TopNews from './TopNews';
import './styles.css';

function App(){
    return(
        <main>
            <NavBar/> 
            <Header/> 
            <TopNews/>
        </main>
    )
}

export default App;