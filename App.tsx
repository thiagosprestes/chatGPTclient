import React from 'react';
import {HomeSreen} from './src/features/Home';
import {QueryClient, QueryClientProvider} from 'react-query';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomeSreen />
    </QueryClientProvider>
  );
}

export default App;
