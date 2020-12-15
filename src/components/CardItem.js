import React from 'react'
import { Link } from 'react-router-dom';

function cardItem(props) {
  return (
  <>
  <li className='cards__item'>
    <Link className='card__item__link' to={props.path}>
      <figure className='cards__item__pic-wrap' data-category={props.label}>
        <img src={props.src} alt='Travel Image'
        className='cards__item__img' />
      </figure>
      <div className='card__item_info'>
        <h5 className='cards__item__text'>{props.text}</h5>
      </div>
    </Link>
  </li>
  </>
  );
}

export default cardItem;