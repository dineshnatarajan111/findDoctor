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

const Home = ({color}) => {
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Rect opacity="0.01" width="24" height="24" fill="black"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M21.5 1C22.8807 1 24 2.11933 24 3.5C24 4.88067 22.8807 6 21.5 6C20.1193 6 19 4.88067 19 3.5C19 2.11933 20.1193 1 21.5 1ZM21.5 3C21.2239 3 21 3.2239 21 3.5C21 3.7761 21.2239 4 21.5 4C21.7761 4 22 3.7761 22 3.5C22 3.2239 21.7761 3 21.5 3ZM12 3C16.9706 3 21 7.0294 21 12C21 16.9706 16.9706 21 12 21C7.0294 21 3 16.9706 3 12C3 7.0294 7.0294 3 12 3ZM12 5C8.13396 5 5 8.13396 5 12C5 15.866 8.13396 19 12 19C15.866 19 19 15.866 19 12C19 8.13396 15.866 5 12 5ZM17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12ZM12 9C10.3432 9 9 10.3432 9 12C9 13.6568 10.3432 15 12 15C13.6568 15 15 13.6568 15 12C15 10.3432 13.6568 9 12 9Z" fill={color} />
        </Svg>
    )
}

export default Home;