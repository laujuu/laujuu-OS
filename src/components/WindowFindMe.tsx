import '../pages/css/Window.css';
import { WindowProps } from '../interfaces/types';
import { useState } from 'react';
import { handleWindowClose } from '../utils/windowUtils';

function WindowFindMe(props: WindowProps) {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = handleWindowClose(setIsClosed);

  return (
    <div className={`window5 ${isClosed ? 'closed' : ''}`}>
      <div className="title-bar">
        <div className="title-bar-text">{props.title}</div>
        <div className="title-bar-controls">
          <button className="btn-head"><span className="btn-icon">-</span></button>
          <button className="btn-head"><span className="btn-icon">▢</span></button>
          <button className="btn-head" onClick={handleClose}><span className="btn-icon">X</span></button>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default WindowFindMe;
