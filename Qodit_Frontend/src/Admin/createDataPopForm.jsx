import React , {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CreateDataPopForm = ({openPopup, handleClose, addNewData, selectedMenuName,selectedMenuItemId}) => {
     const [title, setTitle] = useState(null)
     const [body, setBody] = useState(null)
     const [alt, setAlt] = useState(null)
  return (
      <Dialog open={openPopup} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Content</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can Create conetent here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Title here:"
            type="text"
            fullWidth
            onChange={(e)=>setTitle(e.target.value) }
          />
             <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter body text here:"
            type="text"
            fullWidth
            onChange={(e)=>setBody(e.target.value) }
          />
             <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter alt text here:"
            type="text"
            fullWidth
            onChange={(e)=>setAlt(e.target.value) }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>addNewData(title,body,alt,selectedMenuName,selectedMenuItemId)} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default CreateDataPopForm;