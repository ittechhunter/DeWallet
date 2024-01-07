import { lazy, Suspense } from 'react';

import DashboardSkeleton from "./components/Skeletons/DashboardSkeleton";

const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (<div className='w-full h-full flex bg-background'>
    <Suspense fallback={<DashboardSkeleton />}>
      <Dashboard />
    </Suspense>
  </div>
  );
}

export default App;
