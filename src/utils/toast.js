import Toast from 'react-native-toast-message';

export let ToastError = (message, title = ' ') => {
    return Toast.show({
        text1: title,
        text2: message,
        position: 'top',
        type: 'error',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 20,
    });
};

export let ToastSuccess = (message, title = ' ') => {
    return Toast.show({
        text1: title,
        text2: message,
        position: 'top',
        type: 'success',
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 0,
    });
};
