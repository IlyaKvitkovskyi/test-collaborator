import React from 'react';
import './Modal.scss';

export default function Modal({ active, setActive }) {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        <span className="modal__content-text">Вы уверены?</span>
        <div className="modal__content-buttons">
          <button className="modal__content-btn">Да</button>
          <button className="modal__content-btn">Нет</button>
        </div>
      </div>
    </div>
  );
}
