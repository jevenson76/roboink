import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [expandedProductTypes, setExpandedProductTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  
  const location = useLocation();
  const navigate = useNavigate();

  // Load filters from URL on mount and URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categories = params.getAll('category');
    const types = params.getAll('type');
    
    if (categories.length > 0) setSelectedCategories(categories);
    if (types.length > 0) setSelectedProductTypes(types);
  }, [location.search]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    selectedCategories.forEach(category => {
      params.append('category', category);
    });
    
    selectedProductTypes.forEach(type => {
      params.append('type', type);
    });
    
    navigate(`/collections?${params.toString()}`, { replace: true });
  }, [selectedCategories, selectedProductTypes, navigate]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      }
      return [...prev, categoryId];
    });
  };

  const toggleProductType = (typeId: string) => {
    setSelectedProductTypes(prev => {
      if (prev.includes(typeId)) {
        return prev.filter(id => id !== typeId);
      }
      return [...prev, typeId];
    });
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