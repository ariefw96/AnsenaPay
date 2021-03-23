import PushNotification from 'react-native-push-notification';

const showNotification = (judul, message, channelId) => {
    PushNotification.localNotification({
        channelId,
        title: judul,
        message,
    });
};

const handleScheduledNotification = (tittle, message, channelId) => {
    PushNotification.localNotificationSchedule({
        channelId,
        title:tittle,
        message,
        date: new date(Date.now() + 5 * 1000),
    });
};

const handleCancel = () => {
    PushNotification.cancelAllLocalNotifications();
};

export { showNotification, handleCancel, handleScheduledNotification };