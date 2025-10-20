import UserSidebar from "./components/UserSidebar";
import UserHeader from "./components/UserHeader";

export default function UserLayout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f5ecde] overflow-hidden">
      {/* Sidebar */}
      <div className="w-full lg:w-64 lg:h-screen overflow-y-auto">
        <UserSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:h-screen overflow-hidden">
        <UserHeader />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
