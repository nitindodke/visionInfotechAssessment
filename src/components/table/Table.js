import React from 'react'

import DataTable from 'react-data-table-component';

const Table = ({data,handleEdit,handleDelete}) => {
    const columns = [
        {
            name: 'Category',
            selector: row => row.category,
        },
        {
            name: 'Product Name',
            selector: row => row.productname,
        },
        {
            name: 'Product Description',
            selector: row => row.productdescription,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Cloth Size',
            selector: row => row.clothsize,
        },
        {
            name: 'In Stock',
            selector: row => row.instock,
        },
        {
            name: 'action',
            cell: (row) => (
                <>
                
                <button className="btn btn-info" onClick={() => handleEdit(row)}>Edit</button>
                <button className='btn btn-danger' onClick={() => handleDelete(row)}>Delete</button>
                </>
              ),
            },
        
    ];

    

    return (
        <div>
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
        </div>
    )
}

export default Table


