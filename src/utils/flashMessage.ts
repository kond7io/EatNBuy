import { showMessage, MessageType} from 'react-native-flash-message';

export const flashMessage = (message: string, description: string, type: MessageType = 'default',) => {
    showMessage({
        message: message,
        description: description,
        type: type,
        position: 'top'
    });
};