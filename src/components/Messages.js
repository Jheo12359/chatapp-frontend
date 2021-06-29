const Messages = ({ data }) => {
    return (
        data.map((item) =>
            <div className='message-wrapper'>
                <h4>{item.username}</h4>
                <p>{item.message}</p>
            </div>
        )
        
    )
}

export default Messages
