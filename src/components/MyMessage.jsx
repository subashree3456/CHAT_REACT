

const MyMessage = ({ message }) => {

  // if our msg is actual txt msg  or an img 
 // that means our msg is an img

 // the below lines of code render the img if our msg is img
  if ( message?.attachments?.length > 0){

    return(
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    )
  }

  return (
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
    {message.text}
  </div>
  )
}

export default MyMessage
