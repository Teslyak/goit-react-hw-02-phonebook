import { Component } from 'react';
import { nanoid } from 'nanoid';





export class AddContact extends Component  {
state = {
  contact: '',
  name: ''
}


handelChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.currentTarget.value
        })
    }
    
    handleAddInList = (e) => {
    e.preventDefault();
    this.props.addNewContact({ id: nanoid(5), ...this.state });
    this.setState({
    contacts: [],
     name: ''
    });

    }

    render() {
        
        return (
            <>
    <form onSubmit={this.handleAddInList}> 
   <lable >Name
    <input
    type="text"
    name="name"
    onChange={this.handelChangeInput}
    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    value={this.state.name}
    required
          />
          </lable> 
          <button type="submit" >Add contact</button>  
        </form>   
           
            </>

        )
}

}



