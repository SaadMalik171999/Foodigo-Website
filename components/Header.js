import Link from 'next/link'

function Header() {


    return (
        <>
            <div className='Header'>
                <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-blue-700 h-20">
                <img className='ms-4' src="https://seeklogo.com/images/G/grocery-shop-dubai-logo-4DF89D60E9-seeklogo.com.png" width="60px"></img>
                <h1 className=' text-3xl text-blue-300 font-bold mt-2' style={{listStyle:"none",  textDecoration: "none", marginLeft : "20px", marginRight : "20px"}} href="/products/product">Foodigo App</h1>

                    <div className="flex h-6 ">
                       <Link className=' hover:text-zinc-400 text-zinc-50  font-bold' style={{listStyle:"none",  textDecoration: "none", fontSize: "large", marginLeft : "20px", marginRight : "20px"}} href="/products/product">Get All Products</Link>
                       <Link className=' hover:text-zinc-400 text-zinc-50 font-bold' style={{listStyle:"none",  textDecoration: "none", fontSize: "large", marginLeft : "20px", marginRight : "20px"}} href="/products/addproduct">Add New Product</Link>
                    </div>
                </nav>
            </div>


        </>
    )
}

export default Header