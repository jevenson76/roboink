import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedProductTypes: string[];
  setSelectedProductTypes: (types: string[]) => void;
  expandedProductTypes: string[];
  setExpandedProductTypes: (types: string[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [expandedProductTypes, setExpandedProductTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');

  return (
    <FilterContext.Provider
      value={{
        selectedCategories,
        setSelectedCategories,
        selectedProductTypes,
        setSelectedProductTypes,
        expandedProductTypes,
        setExpandedProductTypes,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};