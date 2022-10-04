const Notification = ({ message, success }) => {
    if (message === null) {
        return null;
    }

    return (
        <div className={success ? 'notification' : 'error'}>
            {message}
        </div>
    )
}

export default Notification;

