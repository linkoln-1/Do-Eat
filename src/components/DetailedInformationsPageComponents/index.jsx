import React, { useEffect } from "react";
import ImageBlock from "./ImageBlock/ImageBlock";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadAddress } from "../../redux/AddressReducer/actions";
import { loadBigImage } from "../../redux/ImageRestaurantReducer/actions";
import {loadContactInfo} from "../../redux/ContactInformationReducer/actions";
import ContactInformationForClient from "./MainContent/ContactInformationForClient";
import WhereWe from "./MainContent/WhereWe";

function DetailedInformation() {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const location = useSelector((state) => state.addresses.addresses);
  const filteredAddresses = location.filter((item) => item.cafeId === id);
  const images = useSelector((state) => state.ImageRestaurants.ImageRestaurant);
  const filteredImages = images.filter((item) => item.cafeId === id);
  const ContactInfo = useSelector((state) => state.ContactInformation.ContactInformation);
  const filteredContactInfo = ContactInfo.filter((item) => item.cafeId === id);
  useEffect(() => {
    dispatch(loadAddress());
    dispatch(loadBigImage());
    dispatch(loadContactInfo())
  }, [dispatch]);
  return (
    <div>
      {filteredImages.map((image) => {
        return <ImageBlock image={image} key={image.id} />;
      })}
      {filteredAddresses.map((address) => {
          return<WhereWe address={address} id={id} key={address.id} />;
        })}
      {filteredContactInfo.map((contactInfo) => {
        return <ContactInformationForClient contactInfo={contactInfo} key={contactInfo.id} />
      })}

      {/*<LocationMap />*/}
    </div>
  );
}

export default DetailedInformation;
