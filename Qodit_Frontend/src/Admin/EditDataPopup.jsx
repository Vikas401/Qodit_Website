import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

const API = 'https://qoditio.herokuapp.com' ;

const EditDataPopForm = ({openPopupEdit, handleCloseEdit, selectedMenuName,selectedMenuItemId,selectedTitle, selectedBody, selectedAlt, SelectedIdForEdit}) => {
     const [titleVal, setTitle] = useState('');
     const [bodyVal, setBody] = useState( '');
     const [altVal, setAlt] = useState( '');
     const [response, setResponse] = useState(null);
     const constpatchApi = async () => {
     const data = {
        title : titleVal,
        body: bodyVal,
        alt: altVal,
    }
        if(data) await axios.patch(`${API}/${selectedMenuName}/${SelectedIdForEdit}`,data).then((res)=> setResponse(res.data))
        console.log(response)
     }
  return (
      <Dialog open={openPopupEdit} onClose={handleCloseEdit} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Content</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can Edit conetent here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Enter Title here:"
            type="text"
            defaultValue={selectedTitle}
            fullWidth
            onChange={(e)=>setTitle(e.target.value) }
          />
             <TextField
            autoFocus
            margin="dense"
            id="body"
            label="Enter body text here:"
            type="text"
            defaultValue={selectedBody}
            fullWidth
            onChange={(e)=>setBody(e.target.value) }
          />
             <TextField
            autoFocus
            margin="dense"
            id="alt"
            label="Enter alt text here:"
            type="text"
            fullWidth
            defaultValue={selectedAlt}
            onChange={(e)=>setAlt(e.target.value) }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleCloseEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={ () => constpatchApi() } color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default EditDataPopForm;