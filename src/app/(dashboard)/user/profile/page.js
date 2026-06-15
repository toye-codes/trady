"use client";

import ProfileInfo from "./components/ProfileInfo";
import ChangePassword from "./components/ChangePassword";
import Preferences from "./components/Preferences";
import ProfileActions from "./components/ProfileActions";

const ProfileSettings = () => {
  const mockUser = {
    username: "BookLover123",
    email: "booklover@example.com",
    profilePic: "/profile.png",
    notifications: true,
  };

  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <h2 className="text-2xl font-semibold text-amber-800 mb-6">
        Profile Settings
      </h2>

      <ProfileInfo user={mockUser} />
      <ChangePassword />
      <Preferences user={mockUser} />
      <ProfileActions />
    </section>
  );
};

export default ProfileSettings;
