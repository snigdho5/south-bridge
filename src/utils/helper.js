import messaging from "@react-native-firebase/messaging";

export const formData = (data = {}) => {
    var formdata = new FormData();
    Object.keys(data).map(key => {
        formdata.append(key, data[key]);
    });
    return formdata;
}

export const fcmToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    return await messaging().getToken();
}