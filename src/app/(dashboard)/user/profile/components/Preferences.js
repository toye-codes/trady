const Preferences = ({ user }) => {
  return (
    <div className="bg-white text-amber-700 p-6 rounded-lg shadow-md mt-6 space-y-4">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="notifications"
          defaultChecked={user.notifications}
          className="h-5 w-5 text-amber-600"
        />
        <span>Enable notifications</span>
      </label>
    </div>
  );
};

export default Preferences;
