import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from "../../../components/Header";
import Link from "next/link";
import Section from "../../../components/Section";

const getproduct = (props) => {
  return (
    <>
      <Header />
      <Section />
      <div className="container mt-5 scripts-list">
        <h1 className="fw-bold fs-2 ">Available Items In Foodigo Store</h1>
        <div id="tomb-container">
          {props.data?.map((item) => {
            return (
              <div
                key={item?._id}
                className="card d-flex scripts-list float-start mx-2 mt-4 "
                style={{ width: "18rem", height: "29rem", }}
              >
                <img
                  src={item?.productImage}
                  style={{
                    width: "14rem",
                    height: "12rem",
                    alignItems: "center",
                    margin: "auto",
                  }}
                  className="card-img-top mt-3"
                />
                <div className="card-body scripts-list">
                  <h5 className="fw-bold text-lg card-title">{item.productName}</h5>
                  <p className=" fs-4 fw-bold card-title">
                    {item?.companyPrice} Rs.
                  </p>
                  <p className=" fs-5 fw-bold card-title">
                    {item?.companyProductStock} Stocks Available
                  </p>

                  <Link href={`product/${item._id}`} passHref>
                    <button className=" fw-bold mt-2 h-10 rounded-md text-gray-50 hover:bg-blue-400 hover:text-gray-700 transition bg-blue-700 btn-center w-50">
                      Edit Item
                    </button>
                  </Link>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default getproduct;

export async function getStaticProps() {
  const response = await axios.get("http://localhost:8000/foodigolist");
  return {
    props: {
      data: response.data,
    },
  };
}
