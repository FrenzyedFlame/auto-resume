import UserSettings from '../components/UserSettings';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cài đặt tài khoản</h1>
        <UserSettings />
      </div>
    </div>
  );
} 