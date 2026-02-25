'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

interface BlogFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  selectedTags: string[];
  availableTags: string[];
  onCategoryChange: (categorySlug: string | null) => void;
  onTagsChange: (tags: string[]) => void;
}

export function BlogFilters({
  categories,
  selectedCategory,
  selectedTags,
  availableTags,
  onCategoryChange,
  onTagsChange,
}: BlogFiltersProps) {
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);

  const handleCategoryClick = (categorySlug: string) => {
    if (selectedCategory === categorySlug) {
      onCategoryChange(null);
    } else {
      onCategoryChange(categorySlug);
    }
  };

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter((t) => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  const handleClearFilters = () => {
    onCategoryChange(null);
    onTagsChange([]);
  };

  const hasActiveFilters = selectedCategory || selectedTags.length > 0;

  return (
    <div className="space-y-4">
      {/* Header con botón de limpiar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <Filter className="h-5 w-5" />
          <span className="font-medium">Filtros</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors"
          >
            <X className="h-4 w-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Filtro por categoría */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-700">Categorías</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.slug.current;
            return (
              <button
                key={category._id}
                onClick={() => handleCategoryClick(category.slug.current)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isSelected
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtro por tags */}
      {availableTags.length > 0 && (
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-700">Etiquetas</h3>
          <div className="relative">
            <button
              onClick={() => setShowTagsDropdown(!showTagsDropdown)}
              className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:border-primary"
            >
              <span>
                {selectedTags.length > 0
                  ? `${selectedTags.length} etiqueta${selectedTags.length > 1 ? 's' : ''} seleccionada${selectedTags.length > 1 ? 's' : ''}`
                  : 'Seleccionar etiquetas'}
              </span>
              <Filter className="h-4 w-4" />
            </button>

            {showTagsDropdown && (
              <div className="absolute z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
                <div className="max-h-60 overflow-y-auto p-2">
                  {availableTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <label
                        key={tag}
                        className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleTagToggle(tag)}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-gray-700">{tag}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Tags seleccionados */}
          {selectedTags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                  <button
                    onClick={() => handleTagToggle(tag)}
                    className="hover:text-primary-dark"
                    aria-label={`Eliminar etiqueta ${tag}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
