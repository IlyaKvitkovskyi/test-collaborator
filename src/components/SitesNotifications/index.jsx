import React from 'react';
import BasicSwitch from '../BasicSwitch';
import BasicOptions from '../BasicOptions';
import closeSvg from '../../assets/images/close.svg';
import BasicDetails from '../BasicDetails';
import deepClone from '../../mixin/mixins'

export default function SitesNotifications({advertisingKievSelected, setAdvertisingKievSelected, advertisingMoscowSelected, setAdvertisingMoscowSelected, data, searchAgents, setSearchAgents}) {

  const [isPersonalMessage, setIsPersonalMessage] = React.useState(true);
  const [isMessageSites, setIsMessageSites] = React.useState(true);
  const [isActiveSwitch, setIsActiveSwitch] = React.useState(true);

  function deleteElement(index, idxElement) {
    const copy = deepClone(searchAgents)
    copy[index].items.splice(idxElement, 1)
    setSearchAgents(copy)
  }

  return (
    <div className="messages__sites">
      <span className="messages__title"> {data.siteNotice.title} </span>

      <div className="messages__item">
        <div className="messages__item--left">
          <span className="messages__subtitle"> {data.siteNotice.news.title} </span>
        </div>
        <div className="messages__item--right">
          <label className="switch">
            <BasicSwitch isActive={isMessageSites} handleToggle={setIsMessageSites} />
            <span className="slider round"></span>
          </label>
          <p className="messages__desc">{data.siteNotice.news.text}</p>
        </div>
      </div>

      <div className="search-agent">
        <span className="search-agent__title"> {data.searchAgentTitle} </span>

        {searchAgents &&
          searchAgents.map((item, index) => (
            <div key={index} className="search-agent__row">
              <label>{item.label}</label>
              <div className="search-agent__inner">
                <div className="search-agent__items">
                  {item.items &&
                    item.items.map((itemEl, idxElement) => (
                      <div key={idxElement} className="search-agent__item">
                        <span className="search-agent__var">
                          {itemEl}
                          <span className="search-agent__close" onClick={() =>deleteElement(index, idxElement)}>
                            <img src={closeSvg} alt="close icon" />
                          </span>
                        </span>
                      </div>
                    ))}
                </div>

                <BasicDetails index={index} searchAgents={searchAgents} setSearchAgents={setSearchAgents} selected={item.details} personalMessageOptions={item.detailsOptions}/>

              </div>
            </div>
          ))}
      </div>

      <div className="addvertising-company">
        <span className="addvertising-company__title search-agent__title">Рекламные компании</span>
        <div className="messages__item addvertising-company__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{data.advertisingCompany[0].title}</span>
          </div>
          <div className="messages__item--right">
            <label className="switch">
              <BasicSwitch isActive={isActiveSwitch} handleToggle={setIsActiveSwitch} />
              <span className="slider round"></span>
            </label>

            <BasicOptions selected={advertisingMoscowSelected} setSelected={setAdvertisingMoscowSelected} personalMessageOptions={data.advertisingCompany[0].personalMessageOptions} />
          </div>
        </div>

        <div className="messages__item addvertising-company__item">
          <div className="messages__item--left">
            <span className="messages__subtitle">{data.advertisingCompany[1].title}</span>
          </div>
          <div className="messages__item--right">
            <label className="switch">
              <BasicSwitch isActive={isPersonalMessage} handleToggle={setIsPersonalMessage} />
              <span className="slider round"></span>
            </label>

            <BasicOptions selected={advertisingKievSelected} setSelected={setAdvertisingKievSelected} personalMessageOptions={data.advertisingCompany[1].personalMessageOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
