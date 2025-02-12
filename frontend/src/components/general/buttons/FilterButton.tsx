import React from 'react';

interface FilterButtonProps {
  ariaLabel: string;
  activeCount: number;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ ariaLabel, activeCount, onClick }) => {

  return (
    <button 
      aria-label={ariaLabel}
      aria-selected={activeCount > 0}
      className={`border border-green-light px-5 py-2 font-medium rounded-full flex items-center gap-x-2 transition-colors ease-in-out duration-300 ${activeCount > 0 ? 'bg-green-light-200' : ''} hover:bg-green-light-200 hover:border-transparent`}
      onClick={onClick}
    >
      Filter
      <span className="block bg-green-dark/20 w-6 h-6 rounded-full">{activeCount}</span>
    </button>
  );
};

export default FilterButton;
