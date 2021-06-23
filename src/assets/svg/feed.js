import React from 'react'
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

const Feed = ({color}) => {
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
        <Rect opacity="0.01" width="24" height="24" fill="black"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2ZM5 4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4ZM8 6H10C11.1046 6 12 6.89543 12 8V12C12 13.1046 11.1046 14 10 14H8C6.89543 14 6 13.1046 6 12V8C6 6.89543 6.89543 6 8 6ZM8 8H10V12H8V8ZM18 7C18 6.44772 17.5523 6 17 6H15L14.8834 6.00673C14.386 6.06449 14 6.48716 14 7C14 7.55228 14.4477 8 15 8H17L17.1166 7.99327C17.614 7.93551 18 7.51284 18 7ZM17 16C17.5523 16 18 16.4477 18 17C18 17.5128 17.614 17.9355 17.1166 17.9933L17 18H7C6.44772 18 6 17.5523 6 17C6 16.4872 6.38604 16.0645 6.88338 16.0067L7 16H17ZM18 11C18 10.4477 17.5523 10 17 10H15L14.8834 10.0067C14.386 10.0645 14 10.4872 14 11C14 11.5523 14.4477 12 15 12H17L17.1166 11.9933C17.614 11.9355 18 11.5128 18 11Z" fill={color}/>
        </Svg>
    )
}

export default Feed;