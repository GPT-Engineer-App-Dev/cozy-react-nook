import React from 'react';
import TodoList from '../components/TodoList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Simple Todo App</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;