import { useState } from "didact"

const defaultFormState = {
  name: '',
  email: '',
  password: ''
}

export const Form = () => {
  const [formState, setFormState] = useState(defaultFormState);

  return (
    <form>
      {
        Object.keys(formState).map((fieldName) => {
          return (
            <div
              style={{
                marginBottom: '20px'
              }}
            >
            <label htmlFor={fieldName}> { fieldName } </label>
            <input id={fieldName} value={formState[fieldName]}  ></input>
            </div>
          )
        })
      }
    </form>
  )
}