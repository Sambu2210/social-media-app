import "./Register.css";
const Register = () => {
  return (
    <div className="rigester">
      <div className="card">
        <div className="rigester-left">
          <h1>Rigester</h1>
          <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Rigester</button>
          </form>
        </div>
        <div className="rigester-right">
          <h1>Lama Social</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <span>Don't have an account ?</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};
export default Register;
