const ChangePassword = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 space-y-4">
      <h3 className="text-lg font-semibold text-amber-800">Change Password</h3>
      <div>
        <label className="block text-amber-700">Current Password</label>
        <input
          type="password"
          name="currentPassword"
          className="w-full border border-amber-700 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="block text-amber-700">New Password</label>
        <input
          type="password"
          name="newPassword"
          className="w-full border border-amber-700 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="block text-amber-700">Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="w-full border border-amber-700 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>
    </div>
  );
};

export default ChangePassword;
