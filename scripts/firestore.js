const admin = require('firebase-admin');

admin.initializeApp({ projectId: 'clockwise-12e44' });

const db = admin.firestore();

db.settings({ host: 'localhost:5003', ssl: false });
const user_id = '	aJZRANYFO9eqVFeOFmhNBkWxdYpb';
const generateMockData = async () => {
  try {
    const users = [
      {
        user_id: '1',
        username: 'jonDoe',
        password: 'password1',
        first_name: 'jon',
        last_name: 'doe',
        email: 'jonDoe@gmail.com',
        bio: 'live love laugh',
        gen_score: 1,
        pfp_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/1%2Fpfp%2Fpfp.jpg?alt=media&token=1b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b',
        posts: ['/posts/1111'],
        time_created: '2020-01-01T00:00:00.000Z',
        time_remove: '2020-01-01T00:00:00.000Z',
      },
      {
        user_id: '2',
        username: 'janeDoe',
        password: 'password2',
        first_name: 'jane',
        last_name: 'doe',
        email: 'janeDoe@gmail.com',
        bio: 'live love laugh',
        gen_score: 1,
        pfp_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/1%2Fpfp%2Fpfp.jpg?alt=media&token=1b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b',
        posts: ['/posts/1112'],
        time_created: '2020-01-01T00:00:00.000Z',
        time_remove: '2020-01-01T00:00:00.000Z',
      },
      {
        user_id: '3',
        username: 'janDoe',
        password: 'password3',
        first_name: 'jan',
        last_name: 'doe',
        email: 'janDoe@gmail.com',
        bio: 'YODO',
        gen_score: 1,
        pfp_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/1%2Fpfp%2Fpfp.jpg?alt=media&token=1b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b',
        posts: ['/posts/1113'],
        time_created: '2020-01-01T00:00:00.000Z',
        time_remove: '2020-01-01T00:00:00.000Z',
      },
      {
        user_id: '4',
        username: 'janaDoe',
        password: 'password3',
        first_name: 'jana',
        last_name: 'doe',
        email: 'janaDoe@gmail.com',
        bio: 'Long live and prosper - Master Yoda',
        gen_score: 1,
        pfp_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/1%2Fpfp%2Fpfp.jpg?alt=media&token=1b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b',
        posts: ['/posts/1114'],
        time_created: '2020-01-01T00:00:00.000Z',
        time_remove: '2020-01-01T00:00:00.000Z',
      },
    ];

    const chats = [
      {
        chat_id: '11',
        users: ['1', '2'],
        messages: [
          {
            message_id: '123',
            from: '1',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: 'hello',
          },
          {
            message_id: '124',
            from: '2',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: 'hey',
          },
        ],
      },
      {
        chat_id: '12',
        users: ['1', '3'],
        messages: [
          {
            message_id: '125',
            from: '3',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: 'hello',
          },
          {
            message_id: '126',
            from: '1',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: 'hey',
          },
        ],
      },
      {
        chat_id: '13',
        users: ['2', '3'],
        messages: [
          {
            message_id: '127',
            from: '3',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: 'Hello there',
          },
          {
            message_id: '128',
            from: '2',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: 'General Kenobi',
          },
        ],
      },
      {
        chat_id: '14',
        users: ['3', '4'],
        messages: [
          {
            message_id: '129',
            from: '3',
            timestamp: '2020-01-01T00:00:00.000Z',
            content:
              'Have you ever heard the tragedy of darth plagous the wize?',
          },
          {
            message_id: '130',
            from: '4',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: 'No. Blocked',
          },
          {
            message_id: '131',
            from: '3',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: 'I thought not.',
          },
          {
            message_id: '132',
            from: '3',
            timestamp: '2020-01-01T00:00:00.000Z',
            content: "It's not a story the jedi would tell",
          },
        ],
      },
    ];

    const posts = [
      {
        post_id: '1111',
        user_id: '1',
        comments: ['/comments/11111', '/comments/11112'],
        img_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/1%2Fposts%2F1111%2Fpost.jpg?alt=media&token=1b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b',
        caption: 'I dont know what this url is',
        time_created: '2020-01-01T00:00:00.000Z',
        time_remove: '2020-01-01T00:00:00.000Z',
      },
      {
        post_id: '1112',
        user_id: '2',
        comments: ['/comments/11113', '/comments/11114', '/comments/11115'],
        img_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/1%2Fposts%2F1111%2Fpost.jpg?alt=media&token=1b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b',
        caption: 'This is waldo, congrats, you found him.',
        time_created: '2020-01-01T00:00:00.000Z',
        time_remove: '2020-01-01T00:00:00.000Z',
      },
      {
        post_id: '1113',
        user_id: '3',
        comments: ['/comments/11116'],
        img_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/1%2Fposts%2F1111%2Fpost.jpg?alt=media&token=1b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b',
        caption: "I'm in paris!!!",
        time_created: '2020-01-01T00:00:00.000Z',
        time_remove: '2020-01-01T00:00:00.000Z',
      },
      {
        post_id: '1114',
        user_id: '4',
        comments: [
          '/comments/11117',
          '/comments/11118',
          '/comments/11119',
          '/comments/11120',
        ],
        img_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/1%2Fposts%2F1111%2Fpost.jpg?alt=media&token=1b5b5b5b-5b5b-5b5b-5b5b-5b5b5b5b5b5b',
        caption: 'This my second post! Hello all!',
        time_created: '2020-01-01T00:00:00.000Z',
        time_remove: '2020-01-01T00:00:00.000Z',
      },
    ];

    const comments = [
      {
        comment_id: '11111',
        user_id: '1',
        comment_children: ['/comments/11112'],
        text: 'What a loser of a post, get better noob',
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11112',
        user_id: '2',
        comment_children: [],
        text: "Hey! that's mean!",
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11113',
        user_id: '3',
        comment_children: ['/comments/11114'],
        text: "I'm going two unfollow you now",
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11114',
        user_id: '3',
        comment_children: ['/comments/11115'],
        text: 'too*',
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11115',
        user_id: '2',
        comment_children: [],
        text: 'to** You are both imbiciles',
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11116',
        user_id: '1',
        comment_children: [],
        text: 'Great post! Very inspiring!',
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11117',
        user_id: '1',
        comment_children: ['/comments/11118'],
        text: 'Why do you want to do this to yourself?',
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11118',
        user_id: '2',
        comment_children: ['/comments/11119'],
        text: 'Because making food is fun',
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11119',
        user_id: '3',
        comment_children: ['/comments/11120'],
        text: 'But so much effort!!',
        time_created: '2020-01-01T00:00:00.000Z',
      },
      {
        comment_id: '11120',
        user_id: '1',
        comment_children: [],
        text: "And just to be clear, I'm not trying to be mean, I'm just trying to help you out I don't want to offend you in any way, shape or form. This post was made with sugar spice and everything nice.",
        time_created: '2020-01-01T00:00:00.000Z',
      },
    ];

    for (const user of users) {
      await db.collection('users').doc(user.user_id).set(user);
    }

    for (const chat of chats) {
      await db.collection('chats').doc(chat.chat_id).set(chat);
    }

    for (const post of posts) {
      await db.collection('posts').doc(post.post_id).set(post);
    }

    for (var i = 0; i < comments.length; i++) {
      await db
        .collection('comments')
        .doc(comments[i].comment_id)
        .set(comments[i]);
    }
  } finally {
    admin.app().delete();
  }
};

generateMockData();
