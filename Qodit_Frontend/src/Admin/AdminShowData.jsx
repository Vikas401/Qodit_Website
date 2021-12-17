 import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import EditDataPopForm from './createDataPopForm';

export default function AdminShowData({data,deleteFunction,handleClickOpenEdit, setTitle, setBody, setAlt, setSelectedIdForEdit}) {
const [selectedId, setselectedId] = useState(null)
const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: false,
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 600,
    editable: false,
  },
  {
    field: 'img',
    headerName: 'ImageURL',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'alt',
    headerName: 'Alt Tag',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: " ",
    headerName: "Edit",
    sortable: false,
    width: 50,
    disableClickEventBubbling: true,
    renderCell: (params) => (<div className="d-flex justify-content-between align-items-center"><EditIcon onClick={()=>handleClickOpenEdit(selectedId)} style={{color:'#212121',cursor:'pointer'}}/></div>)
    
  },
  {
    field: "",
    headerName: "Delete",
    sortable: false,
    width: 50,
    disableClickEventBubbling: true,
    renderCell: (params) => (<div className="d-flex justify-content-between align-items-center"><DeleteForeverIcon style={{color:'#f44336',cursor:'pointer'}} onClick={()=> deleteFunction(selectedId)}/></div>),
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,          
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
];

if(data) {
    return (
        <div style={{ height: 500, width: '100%' }}>
      <DataGrid
      getRowId={(id=> id._id)}
        rows={data}
        columns={columns}
        pageSize={7}
        checkboxSelection={false}
        disableSelectionOnClick
        onCellClick={ (param) =>{
          const id = param.row._id
          setselectedId(id);
          setTitle(param.row.title);
          setBody(param.row.body);
          setAlt(param.row.alt);
          setSelectedIdForEdit(id)
        }}
      />
    </div>
  );}
  else return <h1>Loading</h1>
}
