import './App.css';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>You edited the sign-in page!</p>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);
