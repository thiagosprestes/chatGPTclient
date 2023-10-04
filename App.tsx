import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Navigation} from './src/navigation';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;
