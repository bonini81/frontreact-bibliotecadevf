import React from 'react';
import { FormGroup, Label, Input, FormText } from 'reactstrap';

//import { Button } from 'reactstrap';

function Upload() {
    return (
      <React.Fragment>
        <div class="container">
        <div class="row mx-auto" style={{width: "400px"}}>
        
      <h2>Suba su Libro!</h2>
      <p>Por favor no suba un libro más de 5MB. Gracias.</p>
      <FormGroup>
      <Label for="exampleFile">Archivo</Label>
      <Input type="file" name="file" id="exampleFile" />
      <FormText color="muted">
        Gracias por su colaboración a nuestra comunidad.
      </FormText>
    </FormGroup>
    
    </div>
    </div>
    </React.Fragment>
    );
  }
  
  export default Upload;