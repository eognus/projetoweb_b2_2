import AuthContextProvider from "@/context/AuthContext";
import ProductContextProvider from "@/context/ProductContext";
import AddProduct from "@/components/AddProduct";

const addProducts = async ({}) => {
  return (
    <main className="h-screen">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
        Formulário de novo produto
      </h1>
      <div className="grid place-items-center">
        <AuthContextProvider>
            <ProductContextProvider>
                <AddProduct/>
            </ProductContextProvider>
        </AuthContextProvider>
      </div>
    </main>
  );
};

export default addProducts;