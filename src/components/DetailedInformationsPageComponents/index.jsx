import React, { useEffect } from "react";
import ImageBlock from "./ImageBlock/ImageBlock";
import MainContent from "./MainContent/MainContent";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadAddress } from "../../redux/AddressReducer/actions";
import { loadBigImage } from "../../redux/ImageRestaurant/actions";

function DetailedInformation() {
  const dispatch = useDispatch();
  const id = parseInt(useParams().id);
  const location = useSelector((state) => state.addresses.addresses);
  const filteredAddresses = location.filter((item) => item.cafeId === id);
  const images = useSelector((state) => state.ImageRestaurants.ImageRestaurant);
  const filteredImages = images.filter((item) => item.cafeId === id);
  // const ContactInfo = useSelector((state) => state.contactinfo.ContactInfo);
  // const filteredContactInfo = ContactInfo.filter((item) => item.cafeId === id);
  useEffect(() => {
    dispatch(loadAddress());
    dispatch(loadBigImage());
  }, [dispatch]);
  return (
    <div>
      {filteredImages.map((image) => {
        return <ImageBlock image={image} key={image.id} />;
      })}
      {filteredAddresses.map((adress) => {
        return <MainContent address={adress} key={adress.id} id={id} />;
      })}

      {/*<LocationMap />*/}
    </div>
  );
}

export default DetailedInformation;
