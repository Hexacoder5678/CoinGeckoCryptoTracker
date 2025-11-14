import React from "react";
import ContentLoader from "react-content-loader";

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen text-white bg-black">
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#1e1e1e"
      foregroundColor="#333"
    >
      <rect x="0" y="15" rx="4" ry="4" width="400" height="13" />
      <rect x="0" y="35" rx="3" ry="3" width="380" height="10" />
      <rect x="0" y="55" rx="3" ry="3" width="360" height="10" />
      <rect x="0" y="75" rx="3" ry="3" width="340" height="10" />
    </ContentLoader>
  </div>
);

export default PageLoader;
