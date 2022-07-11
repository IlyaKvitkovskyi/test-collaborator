import React from 'react';
import BasicSwitch from '../BasicSwitch';
import DB from '../../assets/db.json';

export default function TelegramNotifications() {
  const [data] = React.useState(DB.data);
  const [isTelegramNews, setIsTelegramNews] = React.useState(true);
  return (
    <div className="messages__telegram">
      <span className="messages__title">{data.telegramNotice.title}</span>

      <div className="messages__item">
        <div className="messages__item--left">
          <span className="messages__telegram-subtitle">{data.telegramNotice.news.title}</span>
        </div>
        <div className="messages__item--right">
          <label className="switch">
            <BasicSwitch isActive={isTelegramNews} handleToggle={setIsTelegramNews} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
