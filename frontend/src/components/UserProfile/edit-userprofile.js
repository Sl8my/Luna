import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//styles
import {MiddleContainer} from "../../styles/containers";
import {
    UserProfileWrapper,
    UserProfileMainWrapper,
    LeftUserProfile,
    LeftUserProfileWrapperBox,
    MiddleUserProfile, RightUserProfile, ButtonUserProfile, Head2, ButtonUserProfilePicture, RightWrapper, ParaWrapper
} from "../../styles/userProfileContainer";
import laurent from "../../assets/images/laurent.jpeg";
//files
import {UserProfile} from "./userprofile";
import {ReviewUserProfile} from "./review-userprofile";
import {CommentUserProfile} from "./comment-userprofile";
import {RestaurantUserProfile} from "./restaurant-userprofile";

import {EditForm, LabelForm, InputForm, InputFormBig, DeleteButton,SaveDeleteButtonDiv, MiddleUserEditProfile} from "../../styles/userEditContainer";
import {LoginFormButton} from "../../styles/buttons";
import star from "../../assets/svgs/star.svg";
import comment from "../../assets/svgs/comment.svg";
import restaurant from "../../assets/svgs/restaurant.svg";
import edit from "../../assets/svgs/edit.svg";

class EditUserProfile extends React.Component {
    state = {
        username:'',
        firstname:'',
        lastname:'',
        email:'',
        location:'',
        phone:'',
        things_i_love:'',
        description:''
    }

    addUsername = (event) => {
        const newUsername = event.currentTarget.value;
        this.setState({username: newUsername})
    }
    addFirstname = (event) => {
        const newFirstname = event.currentTarget.value;
        this.setState({firstname: newFirstname})
    }
    addLastname = (event) => {
        const newLastname = event.currentTarget.value;
        this.setState({lastname: newLastname})
    }
    addEmail = (event) => {
        const newEmail = event.currentTarget.value
        this.setState({Password: newEmail})
    }
    addLocation = (event) => {
        const newLocation = event.currentTarget.value
        this.setState({Password: newLocation})
    }
    addPhone = (event) => {
        const newPhone = event.currentTarget.value
        this.setState({Password: newPhone})
    }
    addThingsILove = (event) => {
        const newThingsILove = event.currentTarget.value
        this.setState({Password: newThingsILove})
    }
    addDescription = (event) => {
        const newDescription = event.currentTarget.value
        this.setState({Password: newDescription})
    }

    handleSaveChanges = (event) => {
        event.preventDefault();
    }

    onClickEditProfile = () =>{
        this.props.history.push('/edit-userprofile/');
    }
    onClickReviews = () =>{
        this.props.history.push('/review-userprofile/');
    }
    onClickComments = () =>{
        this.props.history.push('/comment-userprofile/');
    }
    onClickRestaurants = () =>{
        this.props.history.push('/restaurant-userprofile/');
    }

    render() {
        return (

            <MiddleContainer>

                <UserProfileWrapper>
                    <ButtonUserProfilePicture style={{marginLeft:240}}><img src="http://taurus-luna.propulsion-learn.ch/media-files/profile_picture/blossom.png" height={152} width={177} marginLeft={100}/></ButtonUserProfilePicture>
                </UserProfileWrapper>

                <UserProfileMainWrapper>
                            <LeftUserProfile>
                                <LeftUserProfileWrapperBox style={{marginLeft:240, height:152, width:177}}>
                                    <ButtonUserProfile><Head2>Tracey's profile</Head2></ButtonUserProfile>
                                    <ButtonUserProfile style={{cursor: 'pointer'}} onClick={this.onClickReviews}><img id="star" src={star} />Reviews</ButtonUserProfile>
                                    <ButtonUserProfile style={{cursor: 'pointer'}} onClick={this.onClickComments}><img id="comment" src={comment} />Comments</ButtonUserProfile>
                                    <ButtonUserProfile style={{cursor: 'pointer'}} onClick={this.onClickRestaurants}><img id="restaurant" src={restaurant} />Restaurant</ButtonUserProfile>
                                    <ButtonUserProfile  style={{cursor: 'pointer'}} onClick={this.onClickEditProfile}><img id="edit" src={edit} />Edit Profile</ButtonUserProfile>
                                </LeftUserProfileWrapperBox>
                            </LeftUserProfile>

                    <MiddleUserEditProfile>
                        <EditForm>
                            <h1>EDIT PROFILE</h1>
                            <LabelForm>Username</LabelForm>
                            <InputForm></InputForm>
                            <LabelForm>First name</LabelForm>
                            <InputForm></InputForm>
                            <LabelForm>Last name</LabelForm>
                            <InputForm></InputForm>
                            <LabelForm>E-mail</LabelForm>
                            <InputForm></InputForm>
                            <LabelForm>Location</LabelForm>
                            <InputForm></InputForm>
                            <LabelForm>Phone</LabelForm>
                            <InputForm></InputForm>
                            <LabelForm>Things I do</LabelForm>
                            <InputFormBig></InputFormBig>
                            <LabelForm>Description</LabelForm>
                            <InputFormBig></InputFormBig>

                            <LoginFormButton onClick = {this.handleSaveChanges.bind(this)}>Save</LoginFormButton>
                            <DeleteButton>Delete the account</DeleteButton>
                        </EditForm>
                    </MiddleUserEditProfile>

                    <RightUserProfile>
                                <RightWrapper><h2>ABOUT TRACEY</h2></RightWrapper>
                                <RightWrapper><h3>Location</h3></RightWrapper>
                                <ParaWrapper>Switzerland</ParaWrapper>
                                <RightWrapper><h3>Luna member since</h3></RightWrapper>
                                <ParaWrapper>no data</ParaWrapper>
                                <RightWrapper><h3>Things I love</h3></RightWrapper>
                                <ParaWrapper>I Love Food</ParaWrapper>
                                <RightWrapper><h3>Description</h3></RightWrapper>
                                <ParaWrapper>Chicken</ParaWrapper>
                    </RightUserProfile>

                </UserProfileMainWrapper>
            </MiddleContainer>
            )
        }
    }
export default withRouter(connect()(EditUserProfile));

