import AuthContextProvider from "@/context/AuthContext";
import ListProduct from "@/components/ListProducts";
import ProductContextProvider from "@/context/ProductContext";

const Products = async ({}) => {
  return (
    <main className="h-screen">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
        Lista de produtos
      </h1>
      <div className="grid place-items-center">
        <AuthContextProvider>
            <ProductContextProvider>
                <ListProduct/>
            </ProductContextProvider>
        </AuthContextProvider>
      </div>
    </main>
  );
};

export default Products;