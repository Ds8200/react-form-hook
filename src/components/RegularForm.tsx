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
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          {...register("username", { required: true })}
          type="text"
          id="username"
          placeholder="Enter UserName"
        />
        {errors.username && <p>This field is required</p>}
      </div>
      <div>
        <input
          {...register("email", { required: true })}
          type="text"
          id="email"
          placeholder="Enter Email"
        />
        {errors.email && <p>This field is required</p>}
      </div>
      <div>
        <input
          {...register("password", { required: true })}
          type="text"
          id="password"
          placeholder="Enter Password"
        />
        {errors.password && <p>This field is required</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegularForm;
