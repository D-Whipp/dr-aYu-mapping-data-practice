import React from 'react';
import Card from './Card';

function Entry(emoji) {
    console.log('emoji: ', emoji);
    return (
        <Card 
            key={emoji.id}
            id={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
        />
        );
}

export default Entry;
