import db from '../../store/firebase';

export const getUsers = async () => {
    const res = await db.collection("users").get();
    const users = [];
    res.forEach((doc) => {
        const data = doc.data();
        users.push({id: doc.id, ...data});
    });
    return users;
};