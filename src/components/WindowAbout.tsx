import '../pages/css/Window.css';
import { WindowProps } from '../interfaces/types';


function WindowAbout(props: WindowProps) {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">{props.title}</div>
        <div className="title-bar-controls">
          <button className="btn-head"><span className="btn-icon">-</span></button>
          <button className="btn-head"><span className="btn-icon">▢</span></button>
          <button className="btn-head"><span className="btn-icon">X</span></button>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default WindowAbout;
