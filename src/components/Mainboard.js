import React from 'react';
import styled from 'styled-components';
import Pin from './Pin';

function Mainboard(props) {

    let { pins } = props;

    return (
        <Wrapper>
            <Container>
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
    display: flex;
    width: 80%;
    background-color: white;
`
