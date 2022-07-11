import React from 'react';
// import arrowSvg from '../../assets/images/arrow.svg';
import classNames from 'classnames';
import deepClone from '../../mixin/mixins'

import './Details.scss';
export default function BasicDetails({ index, searchAgents, setSearchAgents, selected, personalMessageOptions }) {
  const [isShow, setIsShow] = React.useState(false);

  function clickOpion(el) {
    const copySearchAgents = deepClone(searchAgents)
    copySearchAgents[index].items.push(el)
    setSearchAgents(copySearchAgents)
    setIsShow(!isShow)
    console.log(copySearchAgents)
  }

  return (
    <div className={classNames("select-details", {'active': isShow})}>
      <div className="select-btn" onClick={()=>setIsShow(!isShow)}>
        <span className="sBtn-text">{selected}</span>
      </div>

      <ul className="details">
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
