import db from '../../store/firebase';

export const getUsers = async () => {
        const res = await db.collection("users").get();
        const users = [];
        res.forEach((doc) => {
            users.push(doc.data());
        });
        return users;
};