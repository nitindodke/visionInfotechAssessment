import Table from './components/table/Table';
import "./App.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CircleNotifications from '@mui/icons-material/CircleNotifications';
import EmailIcon from '@mui/icons-material/Email';
import FlagIcon from '@mui/icons-material/Flag';

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState('');
  const [productname, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');
  const [clothsize, setClothSize] = useState('');
  const [instock, setInStock] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editModel, setEditModel] = useState(false);
  const [seletedRow, setSelectedRow] = useState({});
  const [search, setSearch] = useState("");

  const AddData = () => {
    setProduct([...product, {
      category: category,
      productname: productname,
      productdescription: productDescription,
      price: price,
      clothsize: clothsize,
      instock: instock

    },])
    handleClose()
  }



  const UpdateData = (seletedRow) => {
    console.log(seletedRow)
    const updatedData = {
      category: category,
      productname: productname,
      productdescription: productDescription,
      price: price,
      clothsize: clothsize,
      instock: instock
    }

    // const updata = product.map((item)=>item.productname===seletedRow.productname?updatedData:seletedRow)
    console.log(updatedData)
    // setProduct(updata)
    setEditModel(false)
  }
  console.log(seletedRow)

  const editHandler = (row) => {
    console.log(row)
    setEditModel(true);
    console.log(editModel)
    setSelectedRow(row);

  }
  console.log(seletedRow)

  const deleteHandler = (row) => {
    const data = product.filter((item) => item.id !== row.id)
    setProduct(data)
    console.log(row)
  }

  const handleChange = () => {

    const data = product.filter((item) => item.productname === search);
    setProduct(data);
  }
  return (
    <>
      <div className="App container-fluid d-flex">
        <div className='nav-container d-flex justify-content-between'>
          <div className='left-section'>
            <div className='option'>
              <h4>Vision Infotech</h4>
              <input type='searchbar' className='form-control' />
              <hr />
            </div>
            <div className='option'>
              <h4>Dashboard</h4>
            </div>
            <div className='option'>
              <h4>Event Managment</h4>
            </div>
            <div className='option'>
              <select className='prof'>
                <option>Professer</option>
              </select>
            </div>
            <div className='option'>
              <select>
                <option>Student</option>
              </select>
            </div>
            <div className='option'>
              <select>
                <option>Course</option>
              </select>
            </div>
            <div className='option'>
              <select>
                <option>Library</option>
              </select>
            </div>
            <div className='option profile'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoCVdNOOByJ5nXqQ4vM7T3KB02W9LTV976nHb7_4&s' width={80} height={80} alt="avtar" />
              <h6>Nitin Dodke</h6>
            </div>
          </div>
        </div>
        <div className='main-wrapper'>
          <div className='d-flex justify-content-between child-wrapper'>
            <div className='header-title'>
              <h4>Product Dashboard</h4>
              <p>Welcome to Product Dashboard</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h6 className='icon'> 
              <FlagIcon /> English</h6>
              <EmailIcon className='icon'/>
              <CircleNotifications className='icon'/>

            </div>
            <div className='d-flex justify-content-between'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoCVdNOOByJ5nXqQ4vM7T3KB02W9LTV976nHb7_4&s' width={40} height={40} alt="avtar" />
              <div>
                <h4>Nitin Dodke</h4>
                <p>Jr.Software Developer</p>
              </div>
            </div>
          </div>
          <div className='table-wrapper'>
          <div className='container d-flex justify-content-left product'>
              <h4>All Products</h4>
          </div>
          <div className='filter-wrapper d-flex justify-content-between'>
            <button className='btn btn-dark' onClick={handleShow}>Add Product</button>
            <div className='searchbar'>
              <input type='search' className='form-control' onChange={(e) => setSearch(e.target.value)} placeholder='Enter ProductName'/>
              <button className='btn btn-success' onClick={handleChange}>Search</button>
            </div>
            <div className='pagination'>

            </div>
          </div>
          <div className='tablecomp'>
          <Table data={product} handleEdit={editHandler} handleDelete={deleteHandler} />
          </div>
        </div>
          </div>
         

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className='form-control pb-2' onChange={(e) => setCategory(e.target.value)} type='text' placeholder='category' />
          <input className='form-control pb-2' onChange={(e) => setProductName(e.target.value)} type='text' placeholder='productNAme' />
          <input className='form-control pb-2' onChange={(e) => setProductDescription(e.target.value)} type='text' placeholder='productDescription' />
          <input className='form-control pb-2' onChange={(e) => setPrice(e.target.value)} type='text' placeholder='Price' />
          <input className='form-control pb-2' onChange={(e) => setClothSize(e.target.value)} type='text' placeholder='ClothSize' />
          <input className='form-control pb-2' onChange={(e) => setInStock(e.target.value)} type='text' placeholder='Instock' />
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={() => {
            AddData()
            handleClose()
          }} >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>





      <Modal show={editModel} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className='form-control pb-2' onChange={(e) => setCategory(e.target.value)} type='text' placeholder='category' value={Object.keys(seletedRow).length === 0 ? "" : seletedRow.category} />
          <input className='form-control pb-2' onChange={(e) => setProductName(e.target.value)} type='text' placeholder='productNAme' value={Object.keys(seletedRow).length === 0 ? "" : seletedRow.productname} />
          <input className='form-control pb-2' onChange={(e) => setProductDescription(e.target.value)} type='text' placeholder='productDescription' value={Object.keys(seletedRow).length === 0 ? "" : seletedRow.productDescription} />
          <input className='form-control pb-2' onChange={(e) => setPrice(e.target.value)} type='text' placeholder='Price' value={Object.keys(seletedRow).length === 0 ? "" : seletedRow.price} />
          <input className='form-control pb-2' onChange={(e) => setClothSize(e.target.value)} type='text' placeholder='ClothSize' value={Object.keys(seletedRow).length === 0 ? "" : seletedRow.clothsize} />
          <input className='form-control pb-2' onChange={(e) => setInStock(e.target.value)} type='text' placeholder='Instock' value={Object.keys(seletedRow).length === 0 ? "" : seletedRow.instock} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {
            UpdateData(seletedRow)
          }} >
            Update Data
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
