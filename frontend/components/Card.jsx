import { React } from 'react';

export default function Card({ name, info, imgLink }) {
  return (
    <div className="mr-4 mb-4 p-3 bg-gray-200 rounded-md">
      <img className="w-80 rounded-md" src={imgLink} alt="" />
      <h3 className="text-2xl font-semibold mt-2">{ name }</h3>
      <p className="font-normal text-gray-600">{ info }</p>
      <button type="button" className="text-white mr-6 bg-blue-500 px-4 py-2 rounded-md mt-2">See details</button>
    </div>
  );
}
