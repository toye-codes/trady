const UserSettingsPage = () => {
  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-amber-900">User Settings</h1>
        <p className="mt-2 text-amber-700">
          Manage notifications and account preferences in this demo frontend.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5">
            <h2 className="font-semibold text-amber-900">Notifications</h2>
            <p className="mt-2 text-amber-700">
              Enable or disable trade and bookmark alerts.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5">
            <h2 className="font-semibold text-amber-900">Privacy</h2>
            <p className="mt-2 text-amber-700">
              All user interactions are simulated in this frontend demo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSettingsPage;
