import React from 'react';
import BasicSwitch from '../BasicSwitch';
import BasicOptions from '../BasicOptions';

import infoSvg from '../../assets/images/info.svg';
export default function GeneralNotifications({ allMessages, personalMessageSelected, setPersonalMessageSelected, isWelcomeSeries, setIsWelcomeSeries, isEducationVebinars, setIsEducationVebinars, isPersonalMessage, setIsPersonalMessage }) {

  return (
    <div className="messages__general">
      <span className="messages__title">{allMessages.title}</span>
      <div className="messages__items">
        <div className="messages__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{allMessages.welcomeSeries.title}</span>
          </div>
          <div className="messages__item--right align-center">
            <label className="switch">
              <BasicSwitch isActive={isWelcomeSeries} handleToggle={setIsWelcomeSeries} />
              <span className="slider round"></span>
            </label>
            <p className="messages__desc">{allMessages.welcomeSeries.text}</p>
          </div>
        </div>

        <div className="messages__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{allMessages.educationVebinars.title}</span>
          </div>
          <div className="messages__item--right align-center">
            <label className="switch">
              <BasicSwitch isActive={isEducationVebinars} handleToggle={setIsEducationVebinars} />
              <span className="slider round"></span>
            </label>
            <p className="messages__desc">{allMessages.educationVebinars.text}</p>
          </div>
        </div>

        <div className="messages__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{allMessages.personalMessage.title}</span>
            <div className="messages__item--left-w">
              <img className="messages__item--left-img" src={infoSvg} alt="Info icon" />
              <div className="arrow">Письма об обновлениях и улучшениях платформы</div>
            </div>
          </div>
          <div className="messages__item--right align-center">
            <label className="switch">
              <BasicSwitch isActive={isPersonalMessage} handleToggle={setIsPersonalMessage} />
              <span className="slider round"></span>
            </label>

            <BasicOptions selected={personalMessageSelected} setSelected={setPersonalMessageSelected} personalMessageOptions={allMessages.personalMessage.personalMessageOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
