'use client';

import { useEffect, useMemo } from 'react';
import { users } from '@/components/data';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setCurrentPage, setSortKey, resetSettings } from '@/store/settingsSlice';
import { RootState } from '@/store/store';

const TablePage = () => {
  const dispatch = useDispatch();
  const { searchQuery, currentPage, sortKey } = useSelector((state: RootState) => state.settings);

  const start = (currentPage - 1) * 10;
  const end = currentPage * 10;

  const sortedUsers = useMemo(() => {
    const sorted = [...users];
    if (sortKey === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortKey === 'role') {
      sorted.sort((a, b) => a.role.localeCompare(b.role));
    } else if (sortKey === 'status') {
      sorted.sort((a, b) => a.status.localeCompare(b.status));
    }
    return sorted;
  }, [sortKey]);

  const filteredUsers = useMemo(() => {
    return searchQuery
      ? sortedUsers.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
      : sortedUsers;
  }, [searchQuery, sortedUsers]);

  const currentItems = filteredUsers.slice(start, end);
  const pageCount = Math.ceil(filteredUsers.length / 10);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800">User Table</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <input
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          type="text"
          placeholder="Search by name or email"
          className="w-full sm:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-2 text-sm text-gray-700">
          <button
            onClick={() => dispatch(setSortKey('name'))}
            className="px-3 py-1 border rounded-md hover:bg-gray-100 cursor-pointer"
          >
            Sort by Name ↑↓
          </button>
          <button
            onClick={() => dispatch(setSortKey('role'))}
            className="px-3 py-1 border rounded-md hover:bg-gray-100 cursor-pointer"
          >
            Sort by Role ↑↓
          </button>
          <button
            onClick={() => dispatch(setSortKey('status'))}
            className="px-3 py-1 border rounded-md hover:bg-gray-100 cursor-pointer"
          >
            Sort by Status ↑↓
          </button>
        </div>
      </div>

      {/* ✅ Reset Info & Button */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-600">
          Your search and sort settings are saved automatically.
        </p>
        <button
          onClick={() => {
            dispatch(resetSettings());
            window.location.reload();
          }}
          className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded-md hover:bg-red-100 transition"
        >
          Reset settings
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl shadow relative">
        <table className="min-w-[700px] w-full divide-y divide-gray-200 bg-white text-base">
          <thead className="bg-gray-100 text-gray-600 text-xs uppercase text-left">
            <tr>
              <th className="px-4 py-3 min-w-[60px]">ID</th>
              <th className="px-4 py-3 min-w-[120px]">Name</th>
              <th className="px-4 py-3 min-w-[180px]">Email</th>
              <th className="px-4 py-3 min-w-[100px]">Role</th>
              <th className="px-4 py-3 min-w-[100px]">Status</th>
              <th className="px-4 py-3 min-w-[120px]">City</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {currentItems.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-500">{user.id}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.role}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-3 py-1 text-xs rounded-full font-semibold ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3">{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => {
            if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
          }}
          className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 cursor-pointer"
        >
          Previous
        </button>
        <div className="flex gap-1 text-sm">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => dispatch(setCurrentPage(index + 1))}
              className={`w-8 h-8 rounded-md border hover:bg-gray-100 cursor-pointer ${
                currentPage === index + 1 ? 'bg-gray-200' : ''
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            if (currentPage < pageCount) dispatch(setCurrentPage(currentPage + 1));
          }}
          className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePage;
