import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface ModernAccordionProps {
  items: AccordionItem[];
}

export const ModernAccordion: React.FC<ModernAccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <ModernAccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};

interface ModernAccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

const ModernAccordionItem: React.FC<ModernAccordionItemProps> = ({ 
  item, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-medium text-dark pr-4">{item.question}</h3>
        {isOpen ? (
          <Minus className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <Plus className="h-5 w-5 text-primary flex-shrink-0" />
        )}
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className={`p-4 pt-0 text-dark/80 ${isOpen ? 'block' : 'hidden'}`}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default ModernAccordion;