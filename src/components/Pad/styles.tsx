import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    border: 1px solid blue;
    font-size: 30px;
    text-align: center;
    color: grey;
    height: 100px;
    font-size: 25px;
    cursor: pointer;
    margin: 3px;
    border: none;
    color: white;
    &:hover {
        background-color: lightblue;
        color: black;
    }
`