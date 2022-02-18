import { React } from 'react';

export default function Card({ name, info, imgLink }) {
  return (
    <div>
      <img className="w-96" src={imgLink} alt="" />
      <h3>{ name }</h3>
      <p>{ info }</p>
      <button type="button">See details</button>
    </div>
  );
}
