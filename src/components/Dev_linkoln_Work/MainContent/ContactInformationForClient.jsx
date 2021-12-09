import React from "react";
import "../scss/ContactInformationForClient.scss";

function ContactInformationForClient(props) {
  return (
    <div className="ContactInformationForClient">
      Данный ресторан работает с 9:00 до 22:00, пятница выходной <hr />
      <div>номер заведения +7 (963) 397-16-74</div> <hr />
      <div>почта <span>s7600180@gmail.com</span></div>
    </div>
  );
}

export default ContactInformationForClient;
