import React, { Fragment} from "react";

const LabelTable = (props) => {
const style= {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: props.fontSize ? props.fontSize: '20px',
    lineHeight: props.lineHeight ? props.lineHeight: '26px',
    color:'#000000',
    mixBlendMode: 'normal',
    opacity: props.opacity ? props.opacity : '0.4',
    marginLeft: props.ml ?? props.ml,
    letterSpacing: props.latterSpacing ?? props.latterSpacing,
}

  return (
    <Fragment>
      <div style={style}>
        <label >
          {props.title.charAt(0).toUpperCase() + props.title.substring(1)}
        </label>
      </div>
    </Fragment>
  );
};


export default LabelTable;