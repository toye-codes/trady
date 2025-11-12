function Footer() {
  return (
    <footer className="bg-amber-50 border-t border-amber-100 mt-12 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-amber-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-amber-700">
              <path
                fill="currentColor"
                d="M6 2h9a2 2 0 0 1 2 2v16l-7-3-7 3V4a2 2 0 0 1 2-2z"
              />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Trady</p>
            <p className="text-xs text-slate-600">
              A quiet space for exchanging stories.
            </p>
          </div>
        </div>
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Trady — All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;