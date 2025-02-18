import{ useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const addToCart = (item, quantity) => {
        const existingProduct = cart.find(prod => prod.item.id === item.id);

        if(!existingProduct) {
            setCart( prev => [...prev, {item, quantity}]);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        } else {
            const updatedCart = cart.map (prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity};
                } else {
                    return prod;
                }
            })
            setCart(updatedCart);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        }
    }

    const deleteProduct = (id) => {
        const deletedProduct = cart.find(prod => prod.item.id === id);
            if(!deletedProduct)
                return;
            if(deletedProduct.quantity > 1) {
                const updatedCart = cart.map(prod => prod.item.id === id ? { ...prod, quantity : prod.quantity - 1} : prod);
                setCart(updatedCart);
            } else {
                const updatedCart = cart.filter(prod => prod.item.id !== id);
                setCart(updatedCart);
            }
        
        setTotalQuantity( prev => Math.max(0, prev - 1));
        setTotal( prev => Math.max(0, prev - deletedProduct.item.price));
    }

    const emptyCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{cart, total, totalQuantity, addToCart, deleteProduct,emptyCart}}>
            { children }
        </CartContext.Provider>
    )
}
