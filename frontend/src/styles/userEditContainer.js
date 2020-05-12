import styled from "styled-components";
import React from "react";

export const EditForm = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5%;
    justify-content: space-evenly;
    background-color: #ffffff;
    `;

export const MiddleUserEditProfile = styled.div`
    width: 45%;
    background-color: #ffffff;
    text-align: left;
    overflow: scroll;
    `;

export const LabelForm = styled.label`
    margin-top: 10px;
    color: #979797;
    `;

export const InputForm = styled.input`
    margin-top: 10px; 
    height: 45px; 
    width: 300px;
    border:solid 1.2px #ebebeb;
    border-radius: 2%;
    text-align:center;
    `;

export const InputFormBig = styled.input`
    border:solid 1.2px #ebebeb;
    border-radius: 2%;
    margin-top: 10px;
    height: 50px;
    width: 500px;
    `;

export const SaveDeleteButtonDiv =styled.div`
    width: 200px;
    margin-left: 20px;
    `;

export const DeleteButton = styled.button`
    color: red;
    font-size:thin;
    margin-left: 380px;
    border: 0;
    background-color:#ffffff; 
    `;