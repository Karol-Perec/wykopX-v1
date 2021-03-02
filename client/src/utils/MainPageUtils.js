export const categories = {
  newest: 'newest',
  active: 'active',
  favourite: 'favourite',
};

export const translateCategoryParam = (category) => {
  if (!category) return categories.active;
  if (category === 'najnowsze') return categories.newest;
  if (category === 'aktywne') return categories.active;
  if (category === 'ulubione') return categories.favourite;
};