'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';

export default function AccountSettings() {
  const { user } = useUser();
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (deleteConfirmation !== 'DELETE') {
      setError('Vui lòng nhập DELETE để xác nhận');
      return;
    }

    try {
      await user?.delete();
      setSuccess('Tài khoản đã được xóa thành công');
    } catch (error) {
      setError('Không thể xóa tài khoản. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Cài đặt tài khoản</h2>

      <div className="space-y-6">
        {/* Thông báo email */}
        <div>
          <h3 className="text-lg font-medium mb-4">Thông báo email</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="emailNotifications" className="ml-2 block text-sm text-gray-900">
                Nhận thông báo về các cập nhật mới
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="marketingEmails"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="marketingEmails" className="ml-2 block text-sm text-gray-900">
                Nhận email marketing
              </label>
            </div>
          </div>
        </div>

        {/* Xóa tài khoản */}
        <div>
          <h3 className="text-lg font-medium mb-4">Xóa tài khoản</h3>
          <p className="text-sm text-gray-500 mb-4">
            Hành động này không thể hoàn tác. Tất cả dữ liệu của bạn sẽ bị xóa vĩnh viễn.
          </p>
          {!isDeleting ? (
            <button
              onClick={() => setIsDeleting(true)}
              className="px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Xóa tài khoản
            </button>
          ) : (
            <form onSubmit={handleDeleteAccount} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nhập DELETE để xác nhận
                </label>
                <input
                  type="text"
                  value={deleteConfirmation}
                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Xác nhận xóa
                </button>
                <button
                  type="button"
                  onClick={() => setIsDeleting(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Hủy
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 