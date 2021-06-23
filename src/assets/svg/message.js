import React from 'react'
import Svg, {
    Path,
    Rect,
} from 'react-native-svg';

const Message = ({color}) => {
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect opacity="0.01" width="24" height="24" fill="black"/>
            <Path fillRule="evenodd" clipRule="evenodd" d="M11.9952 2C9.32426 2 6.81501 3.04018 4.92488 4.93018C1.34208 8.51272 1.02099 14.2195 4.12639 18.1681C3.79182 18.7687 3.377 19.2267 2.88781 19.4672C2.37675 19.7198 2.09009 20.2677 2.17789 20.8296C2.2657 21.3915 2.70124 21.8304 3.26238 21.9181C3.51136 21.9568 3.78504 21.9797 4.08326 21.9797C5.21771 21.9797 6.38074 21.667 7.48999 20.9259C8.89143 21.6363 10.4319 22 11.9912 22C14.6316 22 17.1778 20.9615 19.0696 19.0698C20.9597 17.1798 22 14.6708 22 12C22 9.33146 20.9573 6.82176 19.0655 4.93018C17.1754 3.04018 14.6662 2 11.9952 2ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill={color}/>
        </Svg>
    )
}

export default Message;