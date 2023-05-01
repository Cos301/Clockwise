//run command 'node firestore.mjs' in terminal at directory 'scripts' while the emulator is running to run this script and create mock data

import * as firebase from 'firebase/app';
import 'firebase/firestore';

import admin from 'firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';

admin.initializeApp({ projectId: 'clockwise-12e44' });

const db = admin.firestore();

db.settings({ host: 'localhost:5003', ssl: false });

//timestamp for the current time
const created = Timestamp.now();

//Create a Date object for a week from now
const oneWeekFromNow = Date.now() + 7 * 24 * 60 * 60 * 1000; // Add one week in milliseconds

// Create a new Timestamp object for one week from now
const remove = Timestamp.fromMillis(oneWeekFromNow);

const generateMockData = async () => {
  try {
    const users = [
      {
        id: '1',
        email: null,
        displayName: null,
        photoURL: null,
        phoneNumber: null,
        customClaims: null,
        created: null,
        userProfile: {
          user_id: '1',
          username: 'jonDoe',
          password: 'password1',
          first_name: 'Bob',
          last_name: 'doe',
          email: 'jonDoe@gmail.com',
          bio: 'live love laugh',
          gen_score: 1,
          pfp_url:
            'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/profile_pictures%2Fuser2.jpeg?alt=media&token=b2e22f23-9a60-47e6-a513-d0adb6a57f79',
          posts: [db.collection('posts').doc('1111')],
          time_created: created,
          time_remove: remove,
        },
      },
      {
        id: '2',
        email: null,
        displayName: null,
        photoURL: null,
        phoneNumber: null,
        customClaims: null,
        created: null,
        userProfile: {
          user_id: '2',
          username: 'janeDoe',
          password: 'password2',
          first_name: 'Alice',
          last_name: 'doe',
          email: 'janeDoe@gmail.com',
          bio: 'live love laugh',
          gen_score: 1,
          pfp_url:
            'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/profile_pictures%2Fuser1.jpeg?alt=media&token=f6b01ebd-83ae-4b22-89ac-99a3cd95d4a2',
          posts: [db.collection('posts').doc('1112')],
          time_created: created,
          time_remove: remove,
        },
      },
      {
        id: '3',
        email: null,
        displayName: null,
        photoURL: null,
        phoneNumber: null,
        customClaims: null,
        created: null,
        userProfile: {
          user_id: '3',
          username: 'janDoe',
          password: 'password3',
          first_name: 'Neil',
          last_name: 'doe',
          email: 'janDoe@gmail.com',
          bio: 'YODO',
          gen_score: 1,
          pfp_url:
            'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/profile_pictures%2Fuser3.jpeg?alt=media&token=7792a3aa-e6c2-4aff-b682-d434fade7427',
          posts: [db.collection('posts').doc('1113')],
          time_created: created,
          time_remove: remove,
        },
      },
      {
        id: '4',
        email: null,
        displayName: null,
        photoURL: null,
        phoneNumber: null,
        customClaims: null,
        created: null,
        userProfile: {
          user_id: '4',
          username: 'janaDoe',
          password: 'password3',
          first_name: 'jana',
          last_name: 'doe',
          email: 'janaDoe@gmail.com',
          bio: 'Long live and prosper - Master Yoda',
          gen_score: 1,
          pfp_url:
            'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/profile_pictures%2Fuser4.jpeg?alt=media&token=17b99d56-3375-48c3-a87c-4d8c634dd9fc',
          posts: [db.collection('posts').doc('1114')],
          time_created: created,
          time_remove: created,
        },
      },
    ];

    const chats = [
      {
        chat_id: '10',
        users: [
          db.collection('users').doc('1'),
          db.collection('users').doc('2'),
        ],
        messages: [
          {
            message_id: '154',
            from: '1',
            timestamp: created,
            content: 'Hello Thomas user test',
          },
          {
            message_id: '155',
            from: '2',
            timestamp: created,
            content: 'Hello wilco',
          },
        ],
      },
      {
        chat_id: '11',
        users: [
          db.collection('users').doc('1'),
          db.collection('users').doc('2'),
        ],
        messages: [
          {
            message_id: '123',
            from: '1',
            timestamp: created,
            content: 'hello',
          },
          {
            message_id: '124',
            from: '2',
            timestamp: created,
            content: 'hey',
          },
        ],
      },
      {
        chat_id: '12',
        users: [
          db.collection('users').doc('1'),
          db.collection('users').doc('3'),
        ],
        messages: [
          {
            message_id: '125',
            from: '3',
            timestamp: created,
            content: 'hello',
          },
          {
            message_id: '126',
            from: '1',
            timestamp: created,
            content: 'hey',
          },
        ],
      },
      {
        chat_id: '13',
        users: [
          db.collection('users').doc('2'),
          db.collection('users').doc('3'),
        ],
        messages: [
          {
            message_id: '127',
            from: '3',
            timestamp: created,
            content: 'Hello there',
          },
          {
            message_id: '128',
            from: '2',
            timestamp: created,
            content: 'General Kenobi',
          },
        ],
      },
      {
        chat_id: '14',
        users: [
          db.collection('users').doc('4'),
          db.collection('users').doc('3'),
        ],
        messages: [
          {
            message_id: '129',
            from: '3',
            timestamp: created,
            content:
              'Have you ever heard the tragedy of darth plagous the wize?',
          },
          {
            message_id: '130',
            from: '4',
            timestamp: created,
            content: 'No. Blocked',
          },
          {
            message_id: '131',
            from: '3',
            timestamp: created,
            content: 'I thought not.',
          },
          {
            message_id: '132',
            from: '3',
            timestamp: created,
            content: "It's not a story the jedi would tell",
          },
        ],
      },
    ];

    const posts = [
      {
        post_id: '1111',
        user_id: '1',
        comments: [
          db.collection('comments').doc('11111'),
          db.collection('comments').doc('11112'),
        ],
        img_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/posts%2Fpost1.jpeg?alt=media&token=6a45ef48-4a60-4b04-8bae-7f0a20ea2567',
        caption: 'I dont know what this url is',
        time_created: created,
        time_remove: created,
      },
      {
        post_id: '1112',
        user_id: '2',
        comments: [
          db.collection('comments').doc('11113'),
          db.collection('comments').doc('11114'),
          db.collection('comments').doc('11115'),
        ],
        img_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/posts%2Fpost2.jpeg?alt=media&token=91117ee0-45ad-47f6-a482-b01fd18ea34c',
        caption: 'This is waldo, congrats, you found him.',
        time_created: created,
        time_remove: created,
      },
      {
        post_id: '1113',
        user_id: '3',
        comments: [db.collection('comments').doc('11116')],
        img_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/posts%2Fpost3.jpeg?alt=media&token=0b33f4bd-71cd-4586-992d-fd073168fa9e',
        caption: "I'm in paris!!!",
        time_created: created,
        time_remove: created,
      },
      {
        post_id: '1114',
        user_id: '4',
        comments: [
          db.collection('comments').doc('11117'),
          db.collection('comments').doc('11118'),
          db.collection('comments').doc('11119'),
          db.collection('comments').doc('11120'),
        ],
        img_url:
          'https://firebasestorage.googleapis.com/v0/b/clockwise-12e44.appspot.com/o/posts%2Fpost4.jpeg?alt=media&token=5fddf9f8-11cb-4e6e-a873-e4d0b7ab1fe4',
        caption: 'This my second post! Hello all!',
        time_created: created,
        time_remove: created,
      },
    ];

    const comments = [
      {
        comment_id: '11111',
        user: db.collection('users').doc('1'),
        text: 'What a loser of a post, get better noob',
        time_created: created,
      },
      {
        comment_id: '11112',
        user: db.collection('users').doc('2'),
        text: "Hey! that's mean!",
        time_created: created,
      },
      {
        comment_id: '11113',
        user: db.collection('users').doc('3'),
        text: "I'm going two unfollow you now",
        time_created: created,
      },
      {
        comment_id: '11114',
        user: db.collection('users').doc('3'),
        text: 'too*',
        time_created: created,
      },
      {
        comment_id: '11115',
        user: db.collection('users').doc('2'),
        text: 'to** You are both imbiciles',
        time_created: created,
      },
      {
        comment_id: '11116',
        user: db.collection('users').doc('1'),
        text: 'Great post! Very inspiring!',
        time_created: created,
      },
      {
        comment_id: '11117',
        user: db.collection('users').doc('1'),
        text: 'Why do you want to do this to yourself?',
        time_created: created,
      },
      {
        comment_id: '11118',
        use: db.collection('users').doc('2'),
        text: 'Because making food is fun',
        time_created: created,
      },
      {
        comment_id: '11119',
        user: db.collection('users').doc('3'),
        text: 'But so much effort!!',
        time_created: created,
      },
      {
        comment_id: '11120',
        user: db.collection('users').doc('1'),
        text: "And just to be clear, I'm not trying to be mean, I'm just trying to help you out I don't want to offend you in any way, shape or form. This post was made with sugar spice and everything nice.",
        time_created: created,
      },
    ];

    for (const user of users) {
      await db.collection('users').doc(user.userProfile.user_id).set(user);
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
