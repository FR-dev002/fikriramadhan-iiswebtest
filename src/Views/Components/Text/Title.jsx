import React, { Fragment} from "react";

const TitleHeader = (props) => {

const pageTitle = {
    position: 'absolute',
    fontFamily: props.fontFamily ? props.fontFamily : 'DM Sans',
    fontStyle: props.fontStyle ? props.fontStyle :'normal',
    fontWeight: props.fontWeight ? props.fontWeight :'500',
    fontSize: props.fontSize ? props.fontSize :'36px',
    lineHeight: props.lineHeight ? props.lineHeight :'47px',
    color: props.color ? props.color :'#000000',
    whiteSpace: 'nowrap',
}

const boxTitle = {
    position: 'absolute',
    fontFamily: props.fontFamily ? props.fontFamily : 'DM Sans',
    fontStyle: props.fontStyle ? props.fontStyle :'normal',
    fontWeight: props.fontWeight ? props.fontWeight :'500',
    fontSize: props.fontSize ? props.fontSize :'20px',
    lineHeight: props.lineHeight ? props.lineHeight :'26px',
    color: props.color ? props.color :'#000000',
    height: props.height ? props.height :'26px',
    top: props.top ? props.top :'calc(50% - 26px/2 - 122px)',
    left: props.left ? props.left : '5.42%',
    right: props.right ? props.right : '83.56%',
}


const styles = props.type === 'page-title' ? pageTitle : boxTitle;


  return (
    <Fragment>
      <div style={styles} className="A-headers">{props.children}</div>
    </Fragment>
  );
};


export default TitleHeader;