import React from 'react';
import DB from '../../assets/db.json';
import './Button.scss';
import Modal from '../Modal';

export default function Button() {
  const [data] = React.useState(DB.data);
  const [modalActive, setModalActive] = React.useState(false);

  return (
    <div>
      <div className="buttons">
        <button className="buttons__default">{data.buttonDefault}</button>
        <button className="buttons__save" onClick={() => setModalActive(true)}>{data.buttonSave}</button>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
}
