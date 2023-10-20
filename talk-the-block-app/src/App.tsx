import React from 'react';
import logo from './logo.svg';
import './App.css';
import './fonts.css'
import SearchPage from './Search/SearchPage';
import CustomGrid from './Grid/CustomGrid';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
 <div className="App">
      <CustomGrid />
    </div>
    </QueryClientProvider>
   
  );
}

export default App;
