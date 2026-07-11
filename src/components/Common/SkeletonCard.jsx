import React from 'react';

const SkeletonCard = ({ viewMode = 'grid' }) => {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse ${viewMode === 'list' ? 'flex' : ''}`}>
      <div className={`bg-gray-100 ${viewMode === 'list' ? 'w-48 shrink-0' : 'aspect-square'}`} />
      <div className="p-4 flex-1 flex flex-col gap-3">
        <div className="h-3 w-12 bg-gray-100 rounded-full" />
        <div className="h-4 w-3/4 bg-gray-100 rounded-full" />
        <div className="h-3 w-20 bg-gray-100 rounded-full" />
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-50">
          <div className="h-5 w-16 bg-gray-100 rounded-full" />
          <div className="h-8 w-16 bg-gray-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;