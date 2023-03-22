import "../styles/globals.css";

//INTERNAL IMPORT
import { VotingProvider } from "../../context/ToDolistApp";

const MyApp = ({ Component, pageProps }) => (
  <VotingProvider>
    <div>
      <Component {...pageProps} />
    </div>
  </VotingProvider>
);

export default MyApp;
