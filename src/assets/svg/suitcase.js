import React from 'react'
import Svg, {
    Path,
    Rect,
} from 'react-native-svg';

const Suitcase = ({color}) => {
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
        <Rect opacity="0.01" width="24" height="24" fill="black"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M10.3333 3H13.6667C14.9833 3 16 4.14381 16 5.5V6H19C20.6569 6 22 7.34315 22 9V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V9C2 7.34315 3.34315 6 5 6H8V5.5C8 4.14381 9.01672 3 10.3333 3ZM14 5.5V6H10V5.5C10 5.19934 10.1772 5 10.3333 5H13.6667L13.7192 5.00725C13.86 5.04555 14 5.23275 14 5.5ZM5 8H8H16H19C19.5523 8 20 8.44772 20 9V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V9C4 8.44772 4.44772 8 5 8ZM13.0081 13H16V15H13.0081V18H11.0015V15H8V13H11.0015V10H13.0081V13Z" fill={color}/>
        </Svg>
    )
}

export default Suitcase;