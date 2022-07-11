import React from "react";
import DB from "./assets/db.json";

import TelegramNotifications from "./components/TelegramNotifications";
import GeneralNotifications from "./components/GeneralNotifications";
import SitesNotifications from "./components/SitesNotifications";
import Button from "./components/Button";

function App() {
  const [data, setData] = React.useState(DB.data);
  const [searchAgents, setSearchAgents] = React.useState(data.searchAgents);

  const [isWelcomeSeries, setIsWelcomeSeries] = React.useState(
    data.allMessages.welcomeSeries.activated
  );
  const [isEducationVebinars, setIsEducationVebinars] = React.useState(
    data.allMessages.educationVebinars.activated
  );
  const [isPersonalMessage, setIsPersonalMessage] = React.useState(
    data.allMessages.personalMessage.activated
  );
  const [personalMessageSelected, setPersonalMessageSelected] = React.useState(
    data.allMessages.personalMessage.selected
  );

  const [advertisingMoscowSelected, setAdvertisingMoscowSelected] =
    React.useState(data.advertisingCompany[0].selected);
  const [advertisingKievSelected, setAdvertisingKievSelected] = React.useState(
    data.advertisingCompany[1].selected
  );

  return (
    <div className="wrapper">
      <div className="main-title">
        <div className="container">
          <div className="main-title__head">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        </div>
      </div>

      <section className="messages">
        <div className="container">
          <GeneralNotifications
            allMessages={data.allMessages}
            isWelcomeSeries={isWelcomeSeries}
            setIsWelcomeSeries={setIsWelcomeSeries}
            isEducationVebinars={isEducationVebinars}
            setIsEducationVebinars={setIsEducationVebinars}
            isPersonalMessage={isPersonalMessage}
            setIsPersonalMessage={setIsPersonalMessage}
            personalMessageSelected={personalMessageSelected}
            setPersonalMessageSelected={setPersonalMessageSelected}
          />

          <SitesNotifications
            data={data}
            searchAgents={searchAgents}
            setSearchAgents={setSearchAgents}
            advertisingMoscowSelected={advertisingMoscowSelected}
            setAdvertisingMoscowSelected={setAdvertisingMoscowSelected}
            advertisingKievSelected={advertisingKievSelected}
            setAdvertisingKievSelected={setAdvertisingKievSelected}
          />

          <TelegramNotifications />

          <Button />
        </div>
      </section>
    </div>
  );
}

export default App;
