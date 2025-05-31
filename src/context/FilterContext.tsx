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
  toggleProductTypeExpansion: (key: string) => void;
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
    
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  }, [selectedCategories, selectedProductTypes, navigate, location.pathname]);

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