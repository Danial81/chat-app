import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID='96abc3d5-3e32-43cf-8baa-d35ca904e80d'
      userName='reza'
      userSecret='12345678'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
