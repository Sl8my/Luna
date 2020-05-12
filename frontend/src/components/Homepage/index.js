import React from "react";
import { useHistory } from "react-router-dom";

import {BestRatedWrapper, MiddleContainer, SearchBarWrapper} from "../../styles/containers";
import {BestRatedRestaurantTitle, SubmitButton} from "../../styles/buttons";
import {BaseForm} from "../../styles/form";

import TopFour from "./TopFour";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";


const Homepage = props => {

    const history = useHistory();

  return (
        <MiddleContainer>
            <SearchBarWrapper>
                <BaseForm placeholder="Search..." type="text"/>
                <SubmitButton onClick={() => history.push("/restaurants")}>Search</SubmitButton>
            </SearchBarWrapper>
            <BestRatedWrapper>
                <BestRatedRestaurantTitle>BEST RATED RESTAURANTS</BestRatedRestaurantTitle>
            </BestRatedWrapper>
            <TopFour props={props}/>

        </MiddleContainer>
  );
};


const mapStateToProps = state => {
    return {
        ...state,
        content: state.content,
      };
    };

export default withRouter(connect(mapStateToProps)(Homepage));
