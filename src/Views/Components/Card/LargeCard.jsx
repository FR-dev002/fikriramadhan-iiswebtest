import React, { Fragment } from "react";
import TitleHeader from "../Text/Title";

const LargeCard = (props) => {

const left = {
    position: 'absolute',
    top: props.top ?  props.top : 0,
    bottom: props.bottom ?  props.bottom : 0,
    right: props.right ?? props.right,
    left: props.left ??  props.left,
    width: props.width ?  props.width : '590px',
    height: props.height ?  props.height : '318px',
    borderRadius: props.borderRadius ?  props.borderRadius : '10px',
    background: props.background ?  props.background : '#ffffff',  
};

  return (
    <Fragment>
      <div style={left} >


        {/* 
            component Title Box (Default style) 
            property '
              fontFamily 
              fontStyle 
              fontWeight 
              fontSize 
              lineHeight 
              color 
              height 
              top 
              left
              right' 
        */}

        <TitleHeader type="box-title"> Chart 1 </TitleHeader>

        {/*  */}
        <div className="box-body">
            TODO
        </div>
      </div>
    </Fragment>
  );
};

export default LargeCard;
