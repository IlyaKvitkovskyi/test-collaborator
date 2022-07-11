import React from 'react';
import arrowSvg from '../../assets/images/arrow.svg';
import classNames from 'classnames';

import './Options.scss';
export default function BasicOptions({ selected, setSelected, personalMessageOptions }) {
  const [isShow, setIsShow] = React.useState(false);

  function clickOpion(el) {
    setSelected(el)
    setIsShow(!isShow)
  }

  return (
    <div className={classNames("select-menu", {'active': isShow})}>
      <div className="select-btn" onClick={()=>setIsShow(!isShow)}>
        <span className="sBtn-text">{selected}</span>
        <img src={arrowSvg} alt="Arrow icon" />
      </div>

      <ul className="options">
        {personalMessageOptions && personalMessageOptions.map((el, idx) => 
          <li key={`${idx}_option`} className="option" onClick={() =>clickOpion(el)}>
            <span className="option-text">
              {el}
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}
