import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import data from './data';

//Context
import {ProductProvider} from "./contexts/ProductContext";
import {CartProvider} from "./contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
    const [products] = useState(data);
    const [cart, setCart] = useLocalStorage('cards', []);

    const addItem = item => {
        setCart([...cart, item]);
    };



    return (
        <ProductProvider value={{products, addItem}}>
            <CartProvider value={[cart, setCart]}>
                <div className="App">
                    <Navigation />

                    <Route exact path="/" component={Products}/>
                    <Route path="/cart" component={ShoppingCart}/>
                </div>
            </CartProvider>
        </ProductProvider>
    );
}

export default App;
