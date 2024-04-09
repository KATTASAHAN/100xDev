import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="p-2 border-b text-center">
        20% off for the next few days
      </div>
      {children}
    </div>
  );
};

export default layout;
