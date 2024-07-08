import { createEntry, readEntry, updateEntry, deleteEntry } from "./LocalStorage.js";

const getData = async (key) =>{
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let response = readEntry(key);
                resolve(response);
            }, 1000);
        } catch (error) {
            reject(error);
        }}).then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
}
const postData = async (data) =>{
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let response = createEntry(data.key, data.value);
                resolve(response);
            }, 1000);
        } catch (error) {
            reject(error);
        }}).then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
}
const updateData = async (data) =>{
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let response = updateEntry(data.key, data.value);
                resolve(response);
            }, 1000);
        } catch (error) {
            reject(error);
        }}).then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
}
const deleteData = async (key) =>{
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                let response = deleteEntry(key);
                resolve(response);
            }, 1000);
        } catch (error) {
            reject(error);
        }}).then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
}
export { getData, postData, updateData, deleteData }