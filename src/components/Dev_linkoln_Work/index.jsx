import React from 'react';
import Header from "./Header/Header";
import ImageBlock from "./ImageBlock/ImageBlock";
import MainContent from "./MainContent/MainContent";

function DetailedInformation(props) {
 return (
   <div>
    <Header />
    <ImageBlock />
    <MainContent />
   </div>
 );
}

export default DetailedInformation;
