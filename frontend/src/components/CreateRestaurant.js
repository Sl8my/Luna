import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {ImageButton, LoginTitle, LoginButton} from "../styles/buttons";

import { CreateNewRestaurantWrapper, CreateNewRestaurantTitle, MiddleContainer } from "../styles/containers";
import { InputField } from "../styles/containerLogin";

import { NewRestaurantForm } from "../styles/form";

import DropdownCountry from "./CountryDropDown";

class CreateRestaurant extends React.Component {
  //put some logic here



  render() {
    return (

      <MiddleContainer>

        <CreateNewRestaurantTitle>
          <LoginTitle>CREATE NEW RESTAURANT</LoginTitle>
        </CreateNewRestaurantTitle>

        <CreateNewRestaurantWrapper>
          <h2>Basic</h2>
          <InputField>
            Name*
            <NewRestaurantForm type="text" required />
          </InputField>

          <InputField>
            Category*
            <NewRestaurantForm type="text" placeholder="Select a category..." />
          </InputField>

          <InputField>
            Country*
            <DropdownCountry />
          </InputField>

        </CreateNewRestaurantWrapper>

        <CreateNewRestaurantWrapper>
          <h2>Address</h2>
          <InputField>
            Street*
            <NewRestaurantForm type="text" required />
          </InputField>
          <InputField>
            City*
            <NewRestaurantForm type="text" required />
          </InputField>
          <InputField>
            Zip
            <NewRestaurantForm type="number" />
          </InputField>
        </CreateNewRestaurantWrapper>

        <CreateNewRestaurantWrapper>
          <h2>Contact</h2>
          <InputField>
            Website
            <NewRestaurantForm type="text" />
          </InputField>
          <InputField>
            Phone*
            <NewRestaurantForm type="text" />
          </InputField>
          <InputField>
            Email
            <NewRestaurantForm type="email" />
          </InputField>
        </CreateNewRestaurantWrapper>

        <CreateNewRestaurantWrapper>
          <h2>Details</h2>
          <InputField>
            Opening hours*
            <NewRestaurantForm type="time" required />
          </InputField>
          <InputField>
            Price level
            {/*<NewRestaurantForm type="text" placeholder="Select a value..." />*/}
            <select>
              <option value="">Select a value...</option>
              <option value="2">Cheap</option>
              <option value="1">Average</option>
              <option value="0">Expensive</option>
            </select>

          </InputField>
          <InputField>
            Image
            <ImageButton type='file' accept="image/png, image/jpeg">CHOOSE A FILE</ImageButton>
          </InputField>

        </CreateNewRestaurantWrapper>

        <CreateNewRestaurantTitle>
          <LoginButton>Create</LoginButton>
        </CreateNewRestaurantTitle>

      </MiddleContainer>
    );
  }
}

export default withRouter(connect()(CreateRestaurant));
