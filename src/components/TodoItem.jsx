import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const TodoItem = ({ todo, onRemove }) => {
  return (
    <li className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
      <span className="text-gray-800">{todo.text}</span>
      <Button variant="ghost" size="icon" onClick={() => onRemove(todo.id)}>
        <X className="h-4 w-4" />
      </Button>
    </li>
  );
};

export default TodoItem;