import { Component } from 'react';
import { nanoid } from 'nanoid';





export class AddContact extends Component  {
state = {
name: '',
number: ''
}


    handelChangeInput = (e) => {
    console.log(e.currentTarget);
        this.setState({
            [e.target.name]: e.currentTarget.value
        })
    }
    
    handleAddInList = (e) => {

    e.preventDefault();
    this.props.addNewContact({ id: nanoid(5), ...this.state });
    this.setState({
    name: '',
    number: ''
    });

    }

    render() {
        
        return (
            <>
    <form onSubmit={this.handleAddInList}> 
   <lable >Name:
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
                    
    <label>Number:
    <input
    type="tel"
    name="number"
    onChange={this.handelChangeInput}
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
                        
</label>
          <button type="submit" >Add contact</button>  
        </form>   
           
            </>

        )
}

}



