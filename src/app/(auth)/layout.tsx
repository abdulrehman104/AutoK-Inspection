import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-8 rounded-xl">
        {children}
      </div>
    </main>
  );
};

export default Layout;
