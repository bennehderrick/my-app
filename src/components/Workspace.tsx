import React, { useState } from 'react';

interface WorkspaceProps {
  initialName: string;
}

const Workspace: React.FC<WorkspaceProps> = ({ initialName }) => {
  const [name, setName] = useState(initialName);

  return (
    <div className="m-5 p-5 p-y-12 mx-auto text-2xl font-bold sm:text-2xl">
      Manage Workspace Settings for {name}
    </div>
  );
};

export default Workspace;