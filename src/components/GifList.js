import React from "react";
import { connect } from "react-redux";
import Gif from "./Gif";

const GifList = props => { 
    const { gifs } = props;

    return (
        <div id="gif-list">
            {
            gifs.map(gif => {
                return(<Gif gif={gif}/>);
            })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        gifs: state.gifs
    }
}
export default connect(mapStateToProps)(GifList);