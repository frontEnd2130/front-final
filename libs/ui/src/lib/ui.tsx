import './ui.module.css';
import {UiProps} from  '@front-workspace/types';
/* eslint-disable-next-line */

export function Ui(props: UiProps) {
  const {title,showTitle} = props;
  return (
    <div>
      <h1>{showTitle && title}</h1>
    </div>
  );
}

export default Ui;
