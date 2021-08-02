import React from 'react';
import NotFound from './NotFound'
import Photo from './Photo'

const PhotoContainer = (props) => {

    // console.log(props.p)

    const alt = props.alt
    let lis = [];
    if (props.p.length > 0) {
        for (let i = 0; i < props.p.length; i++) {
            lis.push(<Photo url={props.p[i]} alter={alt} key={i} />)
        }
    } else lis = <NotFound />

        // console.log(lis)

    return (
        <ul>
            {lis}
        </ul>
    )
}

export default PhotoContainer;