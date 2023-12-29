import { Toaster } from "react-hot-toast";

export const App = ({ children }) => {
  return (
    <div className="App">
      {children}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
