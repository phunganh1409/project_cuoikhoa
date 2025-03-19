'use client'

import React from 'react'

export default function Locations() {
  return (
    <div>
      <h1 className='text-center mb-2'>Location</h1>
      <div className="rounded-lg overflow-hidden shadow-lg ml-2">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
           ID
        </th>
        <th scope="col" className="px-6 py-3">
          Tên vị trí
        </th>
        <th scope="col" className="px-6 py-3">
          Tỉnh Thành
        </th>
        <th scope="col" className="px-6 py-3">
          Quốc Gia
        </th>
        <th scope="col" className="px-6 py-3">
          Hình ảnh
        </th>
        
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">
          Silver
        </td>
        <td className="px-6 py-4">
          Laptop
        </td>
        <td className="px-6 py-4">
          $2999
        </td>
        <td className="px-6 py-4 text-right">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}
