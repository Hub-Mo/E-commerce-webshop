import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import ProductDetail from './routes/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './routes/ProductsPage';
import CartPage from './routes/CartPage';
import LoginPage from "./routes/LoginPage";
import ResetPasswordPage from "./routes/ResetPasswordPage";
import SignUpPage from "./routes/SignUpPage";
import Form from './components/Form';
import ErrorPage from './routes/ErrorPage';
import EditUserForm from './components/EditUserForm';
import CheckoutPage from "./routes/CheckoutPage";
import AddProduct from './routes/AddProduct';
import CategoryPage from './routes/CategoryPage';
import MyAccount from './routes/MyAccount';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/Password" element={<ResetPasswordPage />} />
          <Route exact path="/SignUp" element={<SignUpPage />} />
          <Route exact path="/product-detail/:id" element={<ProductDetail />} />
          <Route exact path="/product-detail/:id/" element={<ProductDetail />} />
          <Route exact path="/category" element={<ProductsPage />} />
          <Route exact path="/categorypage/" element={<CategoryPage />} />
          <Route exact path="/categorypage/:id" element={<CategoryPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/test-form" element={<Form />} />
          <Route exact path="*" element={<ErrorPage />} />
          <Route path="user/:id/edit" element={<EditUserForm />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="user/:id/edit" element={<EditUserForm />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route exact path="/my-account" element={<MyAccount />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;