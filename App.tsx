
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ProjectProvider, useProject } from './context/ProjectContext';
import { router } from './router';

const InitializationOverlay: React.FC = () => {
  const { isInitializing, projectData } = useProject();

  if (!isInitializing) return null;

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center space-y-12 p-12">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-gray-100 border-t-yellow-400 rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-900 text-sm">Sun</div>
      </div>
      <div className="text-center space-y-4 max-w-sm animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Provisioning Infrastructure...</h2>
        <p className="text-gray-400 font-medium leading-relaxed">
          Initializing dedicated system nodes and calibrating reasoning layers for {projectData.companyName}.
        </p>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ProjectProvider>
      <InitializationOverlay />
      <RouterProvider router={router} />
    </ProjectProvider>
  );
};

export default App;
