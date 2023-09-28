import { useForm } from 'react-hook-form';

interface FormData {
  username: string;
  email: string;
  password: string;
}

function RegularForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          {...register("username", {
            required: true,
            minLength: 2
          })}
          type="text"
          id="username"
          placeholder="Enter UserName"
        />
        {errors.username && <p>This field is required and must be at least 2 characters long.</p>}
      </div>
      <div>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
          type="text"
          id="email"
          placeholder="Enter Email"
        />
        {errors.email && <p>This field is required and must be a valid email address.</p>}
      </div>
      <div>
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20, 
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/,
          })}
          type="password"
          id="password"
          placeholder="Enter Password"
        />
        {errors.password && (
          <p>
            This field is required and must meet the password requirements.
          </p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
