import { StarRating } from "../../../styles/cardDesign";
import starHalf from "../../../assets/svgs/rating.svg";
import starGrey from "../../../assets/svgs/star-grey.svg";
import star from "../../../assets/svgs/star-yellow.svg";
import React from "react";

export const renderStars = value => {
  if (value <= 10) {
    return (
      <>
        <StarRating src={starHalf} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
      </>
    );
  } else if (value <= 20) {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
      </>
    );
  } else if (value <= 30) {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={starHalf} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
      </>
    );
  } else if (value <= 40) {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
      </>
    );
  } else if (value <= 50) {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={starHalf} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
      </>
    );
  } else if (value <= 60) {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={starGrey} />
        <StarRating src={starGrey} />
      </>
    );
  } else if (value <= 70) {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={starHalf} />
        <StarRating src={starGrey} />
      </>
    );
  } else if (value <= 80) {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={starGrey} />
      </>
    );
  } else if (value <= 90) {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={starHalf} />
      </>
    );
  } else {
    return (
      <>
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
        <StarRating src={star} />
      </>
    );
  }
};
