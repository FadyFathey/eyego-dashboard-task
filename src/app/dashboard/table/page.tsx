'use client';

import { users } from '@/components/data';
import { useState } from 'react';

const TablePage = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [sortedUsers, setSortedUsers] = useState(users);

  const handleSort = (sort: string) => {
    setSort(sort);
    if (sort === 'name') {
      const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
      setSortedUsers(sortedUsers);
    }
    if (sort === 'role') {
      const sortedUsers = [...users].sort((a, b) => a.role.localeCompare(b.role));
      setSortedUsers(sortedUsers);
    }
    if (sort === 'status') {
      const sortedUsers = [...users].sort((a, b) => a.status.localeCompare(b.status));
      setSortedUsers(sortedUsers);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800">User Table</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search by name or email"
          className="w-full sm:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-2 text-sm text-gray-700">
          <button
            onClick={() => handleSort('name')}
            className="px-3 py-1 border rounded-md hover:bg-gray-100 cursor-pointer"
          >
            Sort by Name ↑↓
          </button>
          <button
            onClick={() => handleSort('role')}
            className="px-3 py-1 border rounded-md hover:bg-gray-100 cursor-pointer"
          >
            Sort by Role ↑↓
          </button>
          <button
            onClick={() => handleSort('status')}
            className="px-3 py-1 border rounded-md hover:bg-gray-100 cursor-pointer"
          >
            Sort by Status ↑↓
          </button>
        </div>
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
            {(search ? sortedUsers.filter((user) => user.name === search) : sortedUsers).map(
              (user) => (
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
              )
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">Previous</button>
        <div className="flex gap-1 text-sm">
          <button className="w-8 h-8 rounded-md border hover:bg-gray-100">1</button>
          <button className="w-8 h-8 rounded-md border hover:bg-gray-100">2</button>
          <button className="w-8 h-8 rounded-md border hover:bg-gray-100">3</button>
        </div>
        <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">Next</button>
      </div>
    </div>
  );
};

export default TablePage;
