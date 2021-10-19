import { ChatEngine } from 'react-chat-engine';
import LoginForm from './component/LoginForm';
import ChatFeed from './component/ChatFeed';

import './App.css';


const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height="100vh"
            projectID="b39e6c32-d7ca-4c38-a987-c0ac229afa71"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps} />}
        />
    )
}
 export default App;