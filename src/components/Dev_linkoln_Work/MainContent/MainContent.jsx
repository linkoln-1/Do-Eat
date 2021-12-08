import React from "react";
import WhereWe from "./WhereWe";
import ContactInformationForClient from "./ContactInformationForClient";
import RestaurantsNearby from "./RestaurantsNearby";

function MainContent(props) {
  return (
    <div>
      {/*Здесь адреса и т.д*/}
      <WhereWe />
      <ContactInformationForClient />
      <RestaurantsNearby />
    </div>
  );
}

export default MainContent;
