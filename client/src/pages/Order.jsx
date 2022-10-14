import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { Products } from "../api/product";
import { Categories } from "../api/category";
import { motion, AnimatePresence } from "framer-motion";
import OrderProduct from "../components/OrderProduct";
import OrderCart from "../components/OrderCart";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  console.log(activeCategory);

  useEffect(() => {
    Products().then((response) => {
      setProducts(response.data);
      setFiltered(response.data);
    });
  }, [Products]);

  useEffect(() => {
    if (activeCategory == "all") {
      setFiltered(products);
      return;
    }
    const filtered = products.filter((product) =>
      product.category.includes(activeCategory)
    );

    setFiltered(filtered);
  }, [activeCategory]);

  useEffect(() => {
    Categories().then((response) => {
      setCategory(response.data);
    });
  }, [category]);

  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Navbar />

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">POS Orders</h1>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex align-items-center px-2 py-3">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={
                      activeCategory == "all"
                        ? "d-none border-0 d-sm-inline-block shadow-sm mx-2 btn-order-cart active"
                        : "d-none border-0 d-sm-inline-block shadow-sm mx-2 btn-order-cart"
                    }
                  >
                    All
                  </button>
                  {category?.map((catItem, key) => {
                    return (
                      <button
                        onClick={() => setActiveCategory(catItem.name)}
                        key={key}
                        className={
                          activeCategory == catItem.name
                            ? "d-none border-0 d-sm-inline-block shadow-sm mx-2 btn-order-cart active"
                            : "d-none border-0 d-sm-inline-block shadow-sm mx-2 btn-order-cart"
                        }
                      >
                        {catItem.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="row">
                <div className="col-md-8 scroll">
                  <section className="pt-3 pb-3">
                    <div className="container px-0">
                      <motion.div className="row mb-md-2">
                        {/* card */}
                        <AnimatePresence>
                          {filtered?.map((product, key) => {
                            return <OrderProduct product={product} key={key} />;
                          })}
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </section>
                </div>
                <div className="col-md-4 shadow-sm border-light py-4 px-0 order-cart">
                  <OrderCart />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Footer --> */}
          <Footer />
        </div>
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <ScrollTop />

      {/* <!-- Logout Modal--> */}
      <LogoutModel />
    </>
  );
};

export default Order;
