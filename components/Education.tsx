import React from 'react'

const Education = () => {
  return (
    <div className="relative overflow-x-auto w-full rounded-xl">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800/60 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            مدرک
          </th>
          <th scope="col" className="px-6 py-3">
           موسسه
          </th>
          <th scope="col" className="px-6 py-3">
            سال فارغ التحصیلی
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-zinc-800/90 dark:border-gray-700 border-gray-200">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            دیپلم
          </th>
          <td className="px-6 py-4">شهید مهدی خراجی</td>
          <td className="px-6 py-4">1404</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Education