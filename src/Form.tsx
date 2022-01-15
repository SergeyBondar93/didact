import { useState } from 'didact';

const defaultFormState = {
  name: '',
  email: '',
  password: '',
};

export function Form() {
  const [formState, setFormState] = useState(defaultFormState);

  const handleChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = () => {
    console.log(formState);
  };

  return (
    <div>
      {/* TODO
        необходимо пробегаться по чилдренам и если тип - массив,
        разворачивать, что бы была плоская структура
      */}
      <form>
        {
        Object.keys(formState).map((fieldName) => (
          <div
            style={{
              marginBottom: '20px',
            }}
          >
            <label htmlFor={fieldName}>
              {' '}
              { fieldName }
              {' '}
            </label>
            <input
              id={fieldName}
              value={formState[fieldName]}
              name={fieldName}
              onChange={handleChange}
            />
          </div>
        ))
      }

      </form>
      <p>{formState.name}</p>
      <p>{formState.email}</p>
      <p>{formState.password}</p>
    </div>
  );
}
