import React, {useState} from 'react';
import styled from 'styled-components';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


// props: {
//     onSubmit: onSearchSubmit()
// }

function Header(props) {
    const[input, setInput] = useState("");
    
    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
        console.log("this is the input (Header) =>", input);
    }

    return (
        <Wrapper>
            <LogoWrapper>
                <IconButton>
                    <PinterestIcon/>
                </IconButton>

            </LogoWrapper>

            <HomePageButton>
                <a href="/">Homepage</a>
            </HomePageButton>

            <FollowingButton>
                <a href="/">Following</a>

            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                    <form>
                        {/* <input type="text" onChange={(e) => console.log(e.target.value)}/> */}
                        <input type="text" onChange={(e) => setInput(e.target.value)}/>
                        <button type="submit" onClick={onSearchSubmit}/>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
        
        <IconsWrapper>
            <IconButton>
                <NotificationsIcon />
            </IconButton>
            <IconButton>
                <TextsmsIcon />
            </IconButton>
            <IconButton>
                <FaceIcon />
            </IconButton>
            <IconButton>
                <KeyboardArrowDownIcon />
            </IconButton>

        </IconsWrapper>
        </Wrapper>
    )
}

export default Header


//Header Component Style

const WrapperCore = styled.div`
align-items: center;
padding: 12px 4px 4px 16px;
`

const Wrapper = styled(WrapperCore)`
    display: flex;
    height: 56px;
    background-color: white;
    color: black;
`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root {
        color: #e60023;
        font-size: 32px;
        cursor: pointer; 
    }
`
const HomeButtons = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
`
const HomePageButton = styled(HomeButtons)`
    background-color: rgb(17, 17, 17);

    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`

const FollowingButton = styled(HomeButtons)`
    background-color: white;

    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover {
        background-color: #e1e1e1;
    }
`

const SearchWrapper = styled.div`
    flex: 1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
    }

    //Hide the submit button, because it's useless here.
    form > button {
        display: none;
    }
    
    //Delete the ugly square around the input
    input: focus {
        outline: none;
    }
`
const IconsWrapper = styled(WrapperCore)`
`
