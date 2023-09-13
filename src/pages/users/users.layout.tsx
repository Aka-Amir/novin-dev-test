import React from "react";
import InfoTopNav from "../../features/InfoTopNav/InfoTopNav.feature";

export function UsersLayout(props: React.PropsWithChildren) {
  return (
    <div className="p-10">
      <InfoTopNav />
      <div className="mt-20">{props.children}</div>
    </div>
  );
}
