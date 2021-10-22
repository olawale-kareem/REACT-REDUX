import './index.css';
import { useSelector, useDispatch } from "react-redux";
import {  decrement, increment,reset } from "./redux/actions/counterActions";
import {  logIn ,  logOut,} from "./redux/actions/authActions";
import { apiCall }  from './redux/actions/apiCallActions'




function App() {

  const counter = useSelector((state) => state.counterReducer);
  const auth = useSelector((state) => state.authReducer);
  const data = useSelector((state) => state.apiReducer);   // get the present value of the data
  const dispatch = useDispatch();




  return (
    <div className="App">
      <h1 test >
         Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3 data-testid='header'>Counter</h3>
      <h3 data-testid='counter'>{counter}</h3>
      <button data-testid='increaseBtn' onClick={() => dispatch(increment())}>Increase</button>
      <button data-testid='resetBtn' onClick={() => dispatch(reset())}>Reset</button>
      <button data-testid='decreaseBtn' onClick={() => dispatch(decrement())}>Decrease</button>

      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      
      {auth ? (
        <div>
          <p>
            I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
          </p>
        </div>
      ) : ('')}

      <p>Click the post button to populate page with post</p>
      <button data-testid='postBtn' onClick={() => dispatch(apiCall())}>Post</button>
      {data.map(post =>
        <h3 key={post.id}>{post.title}</h3>
      )}
    </div>
  );
}

export default App;
