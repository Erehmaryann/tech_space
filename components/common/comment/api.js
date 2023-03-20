export const getComments = async () => {
  return [
    // {
    //   date: "2023-03-11T17:51:25.893Z",
    //   from: {
    //     _id: "640881acfed72b7e37e196f6",
    //     fullname: "Ereh, Maryann Edward",
    //     email: "edwardmaryann09@gmail.com",
    //     username: "dev_ryanne",
    //     role: "USER",
    // username: "dev_ryanne",
    // _id: "640881acfed72b7e37e196f6"
    //   },
    //   reply: [
    //     {
    //       date: "2023-03-11T18:02:27.559Z",
    //       from: "640881acfed72b7e37e196f6",
    //       to: "6407b409c440d81abe12b8a0",
    //       _id: "640cc239dec3bcd23ce96beb",
    //     },
    //   ],
    //   text: "This is a test comment",
    //   to: {
    //     _id: "6407b409c440d81abe12b8a0",
    //     fullname: "Chibuzor Victor",
    //     email: "coolbuhzor@gmail.com",
    //     username: "Chibuzor",
    //     role: "USER",
    // username: "Chibuzor",
    // _id: "6407b409c440d81abe12b8a0"
    //   },
    //   _id: "640cbfa285e60f48d2f83695",
    // },
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
