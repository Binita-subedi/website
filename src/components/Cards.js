import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div class='cards'>
      <h1>Check out these Epic Destination!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
            src='images/immg-9.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/srvices'
            />
          </ul>

        </div>
      </div>  
      
    </div>
  )
}

export default Cards;
