export const translateCategoryIdToName = (categoryId: number) => {
  switch (categoryId) {
    case 2:
      return "CMS";
    case 3:
      return "Database";
    case 4:
      return "Storage";
    case 5:
      return "Auth";
    case 6:
      return "Hosting";
  }
};
