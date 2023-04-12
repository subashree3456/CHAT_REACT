import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed';

const App = () =>{
    return(
        <ChatEngine 
        height="100vh"
        projectID="86d358d0-d107-4a31-92d2-8ea911b5988f"
        userName="Suba Shree"
        userSecret="Narasimha30"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}


export default App;


// 84490904-ac27-4056-8e67-0b66e36871a1