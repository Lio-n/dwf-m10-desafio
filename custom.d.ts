type UserStateProps = { email: string; full_name: string; token: string; avatar: string };
type FetchAPIParams = { path: string; options?: any; isSecure?: boolean };
type UserData = {
  address: string;
  full_name: string;
  orders_generated: string[];
  email: string;
  created_at: Created_at;
};

type Created_at = {
  _seconds: number;
  _nanoseconds: number;
};

type MenuLinkProps = { name: "Ingresar" | "Crear Cuenta" | "Mi perfil" | "Cerrar Sesión" };
type FooterLinkProps = { name: "instagram" | "linkedin" | "github" };

type useGetProductsByQueryParams = {
  query: string;
  offset?: number;
};

type BaseQuery = useGetProductsByQueryParams;

type SearchResponse = {
  results: Product[];
  pagination: Pagination;
};

type ImageProps = { src: string; borderRadius?: string; alt: string };

type Pagination = {
  offset: number;
  limit: number;
  total: number;
};

type Product = {
  objectID: string;
  title: string;
  vendor: string[];
  in_stock: boolean;
  category_id: string;
  picture_url: string;
  description: string;
  material: string[];
  size: string;
  unit_price: number;
};

type CardProductProps = Pick<Product, "title" | "picture_url" | "unit_price"> & {
  id: string | number;
};

type OrderResponse = {
  order: Order;
  created_at: Created_at;
};

type Order = {
  status: "paid" | "pending" | "cancelled";
  additional_info: object;
  product_id: string;
  user_id: string;
  created_at: Date;
  price_per_unit: number;
  quantity: number;
  total_cost: number;
};

type GetTokenParams = {
  email: string;
  code: number | string;
};

type PatchMeParams = {
  address: string;
  full_name: string;
};

type Alert = {
  message: string;
};

type GenerateOrderParams = {
  additionalInfo: { description: string };
  productId: string | number;
};

type ProductInfoProps = Pick<Product, "title" | "unit_price" | "description"> & {
  id: string | number;
};
