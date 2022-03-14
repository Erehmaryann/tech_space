// export const commentData = [
//     {
//         "userId": "01a",
//         "comId": "012",
//         "fullName": "Riya Negi",
//         "avatarUrl": "/assets/svg/profilepix.svg",
//         "text": "Hey, Loved your blog! ",
//         "replies": [
//             {
//                 "userId": "02a",
//                 "comId": "013",

//                 "fullName": "Adam Scott",
//                 "avatarUrl": "/assets/svg/profilepix.svg",
//                 "text": "Thanks! It took me 1 month to finish this project but I am glad it helped out someone!🥰"
//             },
//             {
//                 "userId": "01a",
//                 "comId": "014",

//                 "fullName": "Riya Negi",
//                 "avatarUrl": "/assets/svg/profilepix.svg",
//                 "text": "thanks!😊"
//             }
//         ]
//     },
//     {
//         "userId": "02b",
//         "comId": "017",
//         "fullName": "Lily",
//         "text": "I have a doubt about the 4th point🤔",
//         "avatarUrl": "/assets/svg/profilepix.svg"
//     },
//     {
//         "userId": "01c",
//         "comId": "018",
//         "fullName": "Derek",
//         "text": "Great explanation!!!",
//         "avatarUrl": "/assets/svg/profilepix.svg"
//     }
// ];

export const getComments = async () => {
    return [
        {
            id: "1",
            body: "Still not getting this one yet. My old one still works perfectly, y’all be good.",
            username: "Takon Ajie",
            userId: "1",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:01",
        },
        {
            id: "2",
            body: "I’m definitely getting it.",
            username: "Takon Ajie",
            userId: "2",
            parentId: null,
            createdAt: "2021-08-16T23:00:33.010+02:02",
        },
        {
            id: "3",
            body: "Ha, same!!!!",
            username: "Uzor Joshua",
            userId: "2",
            parentId: "1",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
        {
            id: "4",
            body: "We dey wait! i want to get their pencil though. i hear it’s compatible w the old one",
            username: "Uzor Joshua",
            userId: "2",
            parentId: "2",
            createdAt: "2021-08-16T23:00:33.010+02:00",
        },
    ];
};

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "John",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};