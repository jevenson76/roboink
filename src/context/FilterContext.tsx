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
  toggleCategory: (categoryId: string) => void;
  toggleProductType: (typeId: string) => void;
  toggleProductTypeExpansion: (key: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [expandedProductTypes, setExpandedProductTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleProductType = (typeId: string) => {
    setSelectedProductTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const toggleProductTypeExpansion = (key: string) => {
    setExpandedProductTypes(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

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
        toggleCategory,
        toggleProductType,
        toggleProductTypeExpansion,
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