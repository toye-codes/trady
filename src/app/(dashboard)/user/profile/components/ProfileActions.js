const ProfileActions = () => {
  return (
    <div className="mt-6 flex space-x-4">
      <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700">
        Save Changes
      </button>
      <button className="border border-amber-600 text-amber-600 px-4 py-2 rounded-md hover:bg-amber-100">
        Logout
      </button>
    </div>
  );
};

export default ProfileActions;
