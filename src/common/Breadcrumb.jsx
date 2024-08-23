import React from 'react'

export default function Breadcrumb({path,path2,slash}) {
  return (
<nav class="flex border-b-2" aria-label="Breadcrumb">
  <ol class="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="#" class="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        /
        <a href="#" class="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">{path}</a>
      </div>
    </li>
    <li aria-current="page">
      <div class="flex items-center">
        {slash}
        <span class="ms-1 text-md font-medium text-gray-500 md:ms-2">{path2}</span>
      </div>
    </li>
  </ol>
</nav>

  )
}
