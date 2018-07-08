import React from 'react';

class FadeImg extends React.Component {
    constructor(props) {
        super(props);
        this.src = props.src;
        this.loaded = 'authscreen bg-unloaded';
    }
    handleImageLoaded() {
        this.loaded = "authscreen bg-loaded";
    }
    render() {
        return(
            <img 
            src={this.src} 
            onLoad={this.handleImageLoaded()}
            className={this.loaded}
            alt='fadeimg'
            />
        )
    }
}

export default FadeImg;