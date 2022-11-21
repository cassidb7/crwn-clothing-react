import { useState, useEffect } from 'react';
import FormInput from '../../components/form-input/form-input.component'
import Button from '../../components/button/button.component'

const defaultFormFields = {
  title: '',
  image_url: ''
}

const CategoryNew = () =>  {

const [formFields, setFormFields] = useState(defaultFormFields);
const { title, image_url } = formFields;

const resetFormFields = () => {
  setFormFields(defaultFormFields);
}

const handleSubmit = async (event) => {
  event.preventDefault();

  fetch('http://localhost:3001/api/v1/categories', {
    method: 'POST',
    body: JSON.stringify(formFields),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

//   useEffect(() => {
//     fetch('http://localhost:3001/api/v1/categories', { method: 'POST', headers: {'Content-Type': 'application/json' }, body: JSON.stringify({formFields})
//     .then(response => response.json())
//     .then(
//       (data) => {
//         setCategories(data);
//       }
//     )
//   }, [])
  
// }


const handleChange = (event) => {
  console.log(event.target)
  const { name, value } = event.target;
  setFormFields({...formFields, [name]: value })

}

  return (
    <div className='sign-in-container'>
      <h1>New Category</h1>
      <form onSubmit={handleSubmit}>
        <FormInput label='Name'  type='text' required onChange={handleChange} name='title' value={title} />
        <FormInput label='Image' type='text' required onChange={handleChange} name='image_url' value={image_url} />
        <div className='buttons-conta iner'>
          < Button type='submit'>Create Category</Button>
        </div>
      </form>
  </div>
  );
};

export default CategoryNew;