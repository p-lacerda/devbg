import { React } from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex bg-gray-800 flex-row items-center justify-between">
      <div className="flex px-6 py-3">
        <h1 className="text-3xl font-bold text-white">Devbg</h1>
      </div>
      <div className="flex px-6 flex-row items-center">
        <p className="text-white mr-6">Ranking</p>
        <p className="text-white mr-6">Categorias</p>
        <Link href="/register">
          <button type="button" className="text-white mr-6 bg-blue-500 px-4 py-2 rounded-md">Novo post</button>
        </Link>
        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </div>
    </nav>
  );
}
