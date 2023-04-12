import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  //   console.log(props);
  const chat = chats && chats[activeChat];
  // console.log(chat , userName , messages);
  const renderMessages = () => {
    const keys = Object.keys(messages);
    // console.log(keys);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? <MyMessage message={message}  /> 
            : <TheirMessage message={message}  lastMessage={messages[lastMessageKey]} />}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            read-receipts
          </div>
        </div>
      );
    });
  };

  // renderMessages();

  if (!chat) return 'Loading...';

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">

          {/* the below line is going to be sub title of our chat */}
        {chat.people.map((person) => ` ${person.person.username}`)}   
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />

      {/* create a form while users able to send msg */}

      <div className="message-form-container">
        {/* render last and 3 rd component */}

        {/* we need whole props  */}
        <MessageForm {...props} chatId={activeChat} />
        </div>

    </div>
  );
};

export default ChatFeed;
