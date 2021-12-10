import React from "react";
import WhereWe from "./WhereWe";
import ContactInformationForClient from "./ContactInformationForClient";
import RestaurantsNearby from "./RestaurantsNearby";

function MainContent({ address, id }) {
  return (
    <div>
      {/*Здесь адреса и т.д*/}
      <WhereWe address={address} id={id} />
      <ContactInformationForClient />
      <RestaurantsNearby />
    </div>
  );
}

export default MainContent;
