import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Input } from 'reactstrap';

const data = [
  {id:1, Nombre: "Andra valdiri", Document:16514416, Cargo: "Aux Cocina", Empresa: "Colanta"},
  {id:2, Nombre: "Daddy yankee", Document:18761919, Cargo: "Aux Cocina", Empresa: "Colanta"},
  {id:3, Nombre: "Dove Cameron", Document:1016177143, Cargo: "Jefe Cocina", Empresa: "Colanta"}
];

class Empleados extends React.Component{
  state = { 
    data: data,
    form:{
      id:'',
      Nombre:'',
      Document: '',
      Cargo: '',
      Empresa: ''
    },
    modalInsertar:false,
    modalEditar:false,
  };

handleChange=e=>{
  this.setState({
    form:{
      ...this.state.form,
      [e.target.name]:e.target.value,
    }
  })
}

mostrarModalInsertar=()=>{
  this.setState({modalInsertar:true})
}

ocultarModalinsertar=()=>{
  this.setState({modalInsertar:false})
}

mostrarModalEditar=(registro)=>{
  this.setState({modalEditar:true, form:registro})
}

ocultarModalEditar=()=>{
  this.setState({modalEditar:false})
}

insertar=()=>{
  var valorNuevo={...this.state.form};
  valorNuevo.id=this.state.data.length+1
  var lista = this.state.data
  lista.push(valorNuevo)
  this.setState({data:lista,modalInsertar:false})
}

editar=(dato)=>{
  var contador=0
  var lista = this.state.data
  lista.map((registro)=>{
    if (dato.id==registro.id) {
      lista[contador].Nombre=dato.Nombre
      lista[contador].Document=dato.Document
      lista[contador].Cargo=dato.Cargo
      lista[contador].Empresa=dato.Empresa
    }
    contador++
  })
  this.setState({data:lista, modalEditar:false})
}

eliminar=(dato)=>{
  var opcion =window.confirm("Realmente desea eliminar el registro"+dato.id)
  if (opcion) {
    var contador=0
    var lista = this.state.data
    lista.map((registro)=>{
      if (registro.id==dato.id) {
        lista.splice(contador,1)
      }
      contador++
    })
    this.setState({data:lista})
  }
}

  render(){
    return(
      <>
      <Container>
        <br />
        <Button color="success" className="row justify-content-between" onClick={()=>this.mostrarModalInsertar()}>Insertar</Button>
        <br /><br />

        <Table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre Completo</th>
              <th>Documento</th>
              <th>Cargo</th>
              <th>Empresa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.id}</td>
                <td>{elemento.Nombre}</td>
                <td>{elemento.Document}</td>
                <td>{elemento.Cargo}</td>
                <td>{elemento.Empresa}</td>
                <td><Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}>Editar</Button></td>
                <td><Button color="danger" onClick={()=>this.eliminar(elemento)}>Eliminar</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

    <Modal isOpen={this.state.modalInsertar}>
      <ModalHeader>
          <div>
            <h3>Insertar registro</h3>
          </div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>Id:</label>
          <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
        </FormGroup>

        <FormGroup>
          <label>Nombre Completo:</label>
          <input className="form-control" name="Nombre" type="text" onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup>
          <label>Documento:</label>
          <input className="form-control" name="Document" type="number" onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup>
          <label>Cargo: </label>
          <input className="form-control" name="Cargo" type="text" onChange={this.handleChange}/>
        </FormGroup>

        <FormGroup>
          <label>Empresa: </label>
          <input className="form-control" name="Empresa" type="text" onChange={this.handleChange}/>
        </FormGroup>
        <ModalFooter>
          <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
          <Button color="danger" onClick={()=>this.ocultarModalinsertar()}>Cancelar</Button>
        </ModalFooter>
      </ModalBody>
      </Modal>


      <Modal isOpen={this.state.modalEditar}>
      <ModalHeader>
          <div>
            <h3>Editar un registro</h3>
          </div>
      </ModalHeader>

      <ModalBody>
        <FormGroup>
          <label>Id:</label>
          <input className="form-control" readOnly type="text" value={this.state.form.id}/>
        </FormGroup>

        <FormGroup>
          <label>Nombre Completo:</label>
          <input className="form-control" name="Nombre" type="text" onChange={this.handleChange} value={this.state.form.Nombre}/>
        </FormGroup>

        <FormGroup>
          <label>Documento:</label>
          <input className="form-control" name="Document" type="number" onChange={this.handleChange} value={this.state.form.Document}/>
        </FormGroup>

        <FormGroup>
          <label>Cargo: </label>
          <input className="form-control" name="Cargo" type="text" onChange={this.handleChange} value={this.state.form.Cargo}/>
        </FormGroup>

        <FormGroup>
          <label>Empresa: </label>
          <input className="form-control" name="Empresa" type="text" onChange={this.handleChange} value={this.state.form.Empresa}/>
        </FormGroup>
        <ModalFooter>
          <Button color="primary" onClick={()=>this.editar(this.state.form)}>editar</Button>
          <Button color="danger" onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
        </ModalFooter>
      </ModalBody>
      </Modal>


      </>
    )
  }
}

export default Empleados;
