import React from "react";

const Gif = props => {
    const { gif } = props;

    return (
    <div className="gif">
        <h3>{gif.title}</h3>
        <p>{gif.username}</p>
        <img 
            width="200" 
            src={gif.images.original.url} 
            alt={gif.title} 
        />
        <p>Rating: 
            <strong>{gif.rating}</strong>
        </p>
        <a 
            target="_blank"
            href={gif.url}
        >
            <button>Chech it out on Giffy!</button>
        </a>
    </div>);
};

export default Gif;