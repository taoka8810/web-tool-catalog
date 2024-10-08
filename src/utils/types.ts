export type Tool = {
  id: number;
  name: string;
  description: string;
  url: string;
  order: number;
  category: Category;
};

export type ToolWithOGP = Tool & { image: string };

export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
};
