import "./Checkout.css";
import { useState, useContext } from "react";
import { db } from "../../services/config";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';  

const Checkout = () => {
        const {cart, emptyCart, total, totalQuantity} = useContext(CartContext);

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [telephone, setTelephone] = useState("");
        const [email, setEmail] = useState("");
        const [emailConfirmation, setEmailConfirmation] = useState("");
        const [orderId, setOrderId] = useState("");
        const [error, setError] = useState("");

        const navigate = useNavigate();

        const formDriver = (event) => {
            event.preventDefault();

            if(!firstName || !lastName || !telephone|| !email || !emailConfirmation) {
                setError("Por favor completa todos los campos");
                return;
            }

            if (email !== emailConfirmation) {
                setError("Los email no coinciden");
                return;
            }

            const order = {
                items: cart.map(product => ({
                    id: product.item.id,
                    name: product.item.name,
                    quantity: product.quantity
                })),
                total: total,
                fecha: new Date(),
                firstName,
                lastName,
                telephone,
                email
            }

            Promise.all(
                order.items.map(async(productOrder) => {
                    const productRef = doc(db, "inventory", productOrder.id);
                    const productDoc = await getDoc(productRef);
                    const realStock = productDoc.data().stock;

                    await updateDoc(productRef, {
                        stock: realStock - productOrder.quantity
                    })
                })
            )
                .then(() => {
                    addDoc(collection(db, "orders"), order)
                        .then(docRef => {
                            setOrderId(docRef.id);
                            emptyCart();   
                        })
                        .catch(error => {
                            console.log(error);
                            setError("No se puede crear la orden")
                        })                
                })
                .catch(error => {
                    console.log("No se puede actualizar el stock: ", error);
                    setError("No se puede actualizar el stock");
                })
        }

    return (
        <div className="checkout-container">
            <h2 className="checkout-title"> Detalle de tu compra </h2>
            <form onSubmit={ formDriver } className="checkout-form">
                {
                    cart.map(product => (
                        <div key={product.item.id} className="checkout-product">
                            <p className="checkout-product-name"> {product.item.name} x {product.quantity} </p>
                            <p className="checkout-product-price"> Precio: ${product.item.price} </p>
                            <hr />
                        </div>
                    ))
                }
                <hr />

                <div className="checkout-form-group">
                    <label htmlFor="" className="checkout-form-label" > Nombre: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} className="checkout-form-input"/>
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="" className="checkout-form-label"> Apellido: </label>
                    <input type="text" onChange={(e)=> setLastName(e.target.value)} className="checkout-form-input" />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="" className="checkout-form-label"> Celular: </label>
                    <input type="text" onChange={(e) => setTelephone(e.target.value)} className="checkout-form-input" />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="" className="checkout-form-label"> Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} className="checkout-form-input" />
                </div>

                <div className="checkout-form-group">
                    <label htmlFor="" className="checkout-form-label"> Confirmación Email: </label>
                    <input type="text" onChange={(e) => setEmailConfirmation(e.target.value)} className="checkout-form-input"/>
                </div>

                {
                    error && <p className="checkout-error"> {error} </p>
                }

                {
                    !orderId && (
                        <button type="submit" className="checkout-button"> Finalizar Orden </button>
                    )
                }

                {
                    orderId && (
                        <div className="checkout-success">
                            <strong> ¡Gracias por tu compra! Tu número de orden es: {orderId} </strong>
                            <button type="button" onClick={() => navigate("/")} className="get-back-btn"> Volver a la página principal </button> 
                        </div>
                    )   
                }
            </form>
        </div>

    )
}

export default Checkout

