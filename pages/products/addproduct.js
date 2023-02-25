import { Col, Form, Row, Input, Button, message } from "antd";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/Header";
import { useRouter } from 'next/router'

const addproduct = (props) => {

    const router = useRouter()

    const handleFinish = async (values) => {
        try {
          debugger
          const response = await axios.post('http://localhost:8000/foodigolist',{ ...values, companyName : "Foodigo"})
          if (response){
            message.success('Product Added Successfully');
            router.push("/products/product")
          }
        } catch (error) {
          console.log(error);
          message.error("Something Went Wrong");
        }
      };

    return (
        <> <Header />
        <div className=" p-4 ">
          <h1 className="flex items-center justify-center font-bold text-4xl  text-sky-600">
            Add New Product
          </h1>
    
          <Form className="p-5" layout="vertical" onFinish={handleFinish}>
            <section>
              <h4 className="font-bold text-2xl pl-1">Product Details</h4>
              <Row>
                <Col className="p-1" xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Product Name"
                    name="productName"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your first name" />
                  </Form.Item>
                </Col>
    
                <Col className="p-1" xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Product Category"
                    name="productCategory"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your first name" />
                  </Form.Item>
                </Col>
    
                <Col className="p-1" xs={24} md={24} lg={8}>
                  <Form.Item
                    label="Company Name"
                    name="companyName"
                    value="Groceteria"
                  >
                    <Input type="text" disabled  placeholder="your first name" />
                  </Form.Item>
                </Col>
    
    
                <Col className="p-1" xs={24} md={24} lg={8}>
                  <Form.Item
                    label="company Price"
                    name="companyPrice"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="number" placeholder="your first name" />
                  </Form.Item>
                </Col>
    
                <Col className="p-1" xs={24} md={24} lg={8}>
                  <Form.Item
                    label="company Product Stock"
                    name="companyProductStock"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="number" placeholder="your first name" />
                  </Form.Item>
                </Col>
    
                <Col className="p-1" xs={24} md={24} lg={8}>
                  <Form.Item
                    label="product Image"
                    name="productImage"
                    required
                    rules={[{ required: true }]}
                  >
                    <Input type="text" placeholder="your first name" />
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
}

export default addproduct


export async function getStaticProps() {
    const response = await axios.get("http://localhost:8000/foodigolist");
    return {
      props: {
        posts: response.data
      },
    };
  }
  