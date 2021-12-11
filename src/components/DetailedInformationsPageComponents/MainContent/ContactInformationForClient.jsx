import React from "react";
import "../scss/ContactInformationForClient.scss";

function ContactInformationForClient({ contactInfo }) {
  return (
    <div className="ContactInformationForClient">
      <div>
        <div className="contact_info_title">
          <span>Контактная информация</span>
        </div>
        <div className="contact__information">
          <div className="contact__information__address">
            <div>Адрес</div>
            <div>
              <span>{contactInfo.LockAddresses}</span>
            </div>
          </div>

          <div className="contact__information__workHour">
            <div>Время Работы</div>
            <div>
              <span>{contactInfo.WorkingHours}</span>
            </div>
          </div>

          <div className="contact__information__ourNumber">
            <div>Телефон</div>
            <div>
              <span>{contactInfo.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInformationForClient;
