import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <div className="flex flex-col overflow-hidden">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 " >
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="w-1/12 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        글번호
                                    </th>
                                    <th scope="col" className="w-7/12 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        제목
                                    </th>
                                    <th scope="col" className="w-1/12 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        작성자
                                    </th>
                                    <th scope="col" className="w-1/12 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        작성일
                                    </th>
                                    <th scope="col" className="w-1/12 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        조회수
                                    </th>
                                    <th scope="col" className="w-1/12 px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        추천수
                                    </th>
                                    
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10">
                                                
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    1
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">제목 들어갈 자리</div>
                                        <div className="text-sm text-gray-500">Tags? HashTag?? #blah-blah</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold">
                                            Administrator
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        2000-01-01
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        1
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        1
                                    </td>
                                </tr>

                                
                            </tbody>
                        </table>
                    </div>
                    <div>
                    <Link to="/write">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-3 my-2 mx-2 border border-blue-700 rounded ">
                        글쓰기
                            </button>
                            
                    </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default List
