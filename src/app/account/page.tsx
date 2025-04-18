import AccountSettings from '../components/AccountSettings';

export default function AccountSettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cài đặt tài khoản</h1>
        <AccountSettings />
      </div>
    </div>
  );
} 