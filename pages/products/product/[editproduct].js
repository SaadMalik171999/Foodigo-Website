import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../../components/Header";
import { Col, Form, Row, Input, Button, message } from "antd";
import "bootstrap/dist/css/bootstrap.min.css"; 

const editproduct = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { editproduct } = router.query;
  const [Data, setData] = useState({
    companyName: "",
    companyPrice: "",
    companyProductStock: "",
    productCategory: "",
    productImage: "",
    productName: "",
  });

  
  useEffect(() => {
    
    handleRetrieveData();
  }, [editproduct])
  

  const handleChange = (e) => {
    if(e.target.name === "companyPrice" || e.target.name === "companyProductStock"){
        setData({ ...Data, [e.target.name]: e.target.valueAsNumber });
    }
    else{
      debugger
        setData({ ...Data, [e.target.name]: e.target.value });
    }
   
  };

  

  const handleFinish = async () => {
    debugger
    console.log(Data,"Data");
    try {
      const response = await axios.put(
        `http://localhost:8000/foodigolist/${Data?._id}`,
        { Data }
      );
      if (response) {
        message.success("Product Edit Successfully");
        router.push("/products/product");
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  const handleRetrieveData = async () => {
    try {
       if(editproduct){
      const response = await axios.get(
        `http://localhost:8000/foodigolist/${editproduct}`
      );
      if (response) {
        setData(response.data);
        message.success("Product Retrieved");
      }
    }
      
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  return (
    <>
      <Header />
      <div className=" p-4 ">
        <h1 className="flex items-center justify-center font-bold text-4xl  text-sky-600">
          Edit Product
        </h1>
        <Form form={form} className="p-5" layout="vertical" onFinish={handleFinish}>
          <section>
            <h4 className="font-bold text-2xl pl-1">Product Details</h4>
            <Row>
              <Col className="p-1" xs={24} md={24} lg={8}>
                <Form.Item
                  label="Product Name"
                  required
                  rules={[{ required: true }]}
                >
                  <Input type="text" name="productName" value={Data?.productName} onChange={handleChange}  />    </Form.Item>
              </Col>

              <Col className="p-1" xs={24} md={24} lg={8}>
                <Form.Item
                  label="Product Category"
                  required
                  rules={[{ required: true }]}
                >
                  <Input type="text" name="productCategory"    value = {Data?.productCategory} onChange={handleChange}   />
                </Form.Item>
              </Col>

              <Col className="p-1" xs={24} md={24} lg={8}>
                <Form.Item
                  label="Company Name"
                  required
                  rules={[{ required: true }]}
                >
                  <Input type="text" name="companyName" disabled value = {Data?.companyName} onChange={handleChange}  />
                </Form.Item>
              </Col>

              <Col className="p-1" xs={24} md={24} lg={8}>
                <Form.Item
                  label="company Price"
                  required
                  rules={[{ required: true }]}
                >
                  <Input type="number" name="companyPrice" value = {Data?.companyPrice} onChange={handleChange}  />
                </Form.Item>
              </Col>

              <Col className="p-1" xs={24} md={24} lg={8}>
                <Form.Item
                  label="company Product Stock"
                  required
                  rules={[{ required: true }]}
                >
                  <Input type="number" name="companyProductStock" value = {Data?.companyProductStock} onChange={handleChange}  />
                </Form.Item>
              </Col>

              <Col className="p-1" xs={24} md={24} lg={8}>
                <Form.Item
                  label="product Image"
                  required
                  rules={[{ required: true }]}
                >
                  <Input type="text" name="productImage" value={Data?.productImage} onChange={handleChange}  />
                </Form.Item>
              </Col>
            </Row>

            <Button
              className=" float-right "
              type="primary"
              danger
              htmlType="submit"
            >
              Submit
            </Button>
          </section>
        </Form>
      </div>
    </>
  );
};

export default editproduct;

