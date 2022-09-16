import { BASE_URL } from "./config";

const post = (url, data, form = false, token) => {
    return new Promise((resolve, reject) => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", 'application/json');
        myHeaders.append("Content-Type", form ? 'multipart/form-data' : 'application/json');

        console.log(data, '======================post=======================', BASE_URL + url,);
        fetch(BASE_URL + url, {
            method: 'POST',
            headers: myHeaders,
            body: data ? form ? data : JSON.stringify(data) : null,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === true || data.status === 'success') {
                    resolve(data);
                } else {
                    reject(new Error(data.message ?? "Something went wrong!!"));
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export {
    post,
};
