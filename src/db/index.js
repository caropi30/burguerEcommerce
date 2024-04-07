import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('session.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS session (name TEXT NOT NULL, token TEXT NOT NULL, email TEXT NOT NULL, name TEXT NOT NULL, phone TEXT NOT NULL, address TEXT NOT NULL, localId TEXT NOT NULL,)',
                [],
                (_result) => resolve(result),
                (_, result) => reject(result)
            );
        });
    })

    return promise;
}

export const insertSession = ({ name, email, password, token: idToken, address, phone }) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO session (name, token, email, phone, address, localId) VALUES (?, ?, ?, ?, ?, ?)',
                [],
                (_result) => resolve(result),
                (_, result) => reject(result)
            );
        });
    })

    return promise;
};


export const getSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'GET * FROM session',
                [],
                (_result) => resolve(result),
                (_, result) => reject(result)
            );
        });
    })

    return promise;
};

export const deleteSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM session',
                [],
                (_result) => resolve(result),
                (_, result) => reject(result)
            );
        });
    })

    return promise;
};