import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
import { withRouter } from 'react-router-dom';

class PhotoContainer extends React.Component {

    componentDidUpdate() {
        this.props.search(this.props.alt);
    }

    render(){
        // console.log(this.props.p);
        const alt = this.props.alt;
        let lis = [];
        if (this.props.p.length > 0) {
            for (let i = 0; i < this.props.p.length; i++) {
                lis.push(<Photo url={this.props.p[i]} alter={alt} key={i} />);
            }
        } else lis = <NotFound />;

        return (
            <div className="photo-container">
                <h2>Pictures of { alt }</h2>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}

export default withRouter(PhotoContainer);