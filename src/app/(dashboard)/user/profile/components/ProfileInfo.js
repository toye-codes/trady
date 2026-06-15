const ProfileInfo = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-16 h-16 rounded-full object-cover border border-[#FEF3C7]"
        />
        <input type="file" className="text-sm text-amber-700" />
      </div>

      <div>
        <label className="block text-amber-700">Username</label>
        <input
          type="text"
          name="username"
          defaultValue={user.username}
          className="w-full border border-amber-700 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="block text-amber-700">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={user.email}
          className="w-full border border-amber-700 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
