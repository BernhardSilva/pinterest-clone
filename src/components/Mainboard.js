import React from 'react';
import '../css/Mainboard.css';
import styled from 'styled-components';
import Pin from './Pin';

function Mainboard(props) {

    let { pins } = props;

    return (
        <Wrapper>
            <Container className="mainboard__container">
                {pins.map((pin, index) => { 
                    let {urls} = pin;   
                    //Use the key prop when Rendering a List with React            
                    return <Pin key={index} urls={urls}/>
                })}
            </Container>
        </Wrapper>
    )
}

export default Mainboard;


// MainBoard Component Style

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 15px;
    justify-content: center;
`

const Container = styled.div`
    //display: flex-wrap;
    //column-count: 5;
    //column-gap: 10px;
    margin: 0 auto;
    height: 100%;
    background-color: white;
`
