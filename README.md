# Mini-Project 2023

## Requirements

The following items are required to run this project:

- Node 16: Used for the app, api and cli (Tip: use NVM)
- Java: used by the Firebase emulators (Make sure that JAVA_HOME is set. Tip: use JENV)
- You need to create a firebase project (See: https://console.firebase.google.com - You will need to config for your firebase project in the .env files, .firestorerc)
- Firebase CLI (See: https://firebase.google.com/docs/cli)

## Get Started

1. Fork the repo

Go to: https://github.com/COS-301/miniproject-2023/fork

2. Clone your fork

```sh
git clone git@github.com:<ACCOUNT>/<PROJECT NAME>.git <PROJECT LOCAL NAME>
```

3. Install dependencies

```sh
cd path/to/project
yarn
```

4. Add Firebase configurations

See files:

- .firebaserc
- .env
- .env.pod

and find and replace "<REPLACE_ME>"

5. Run the stack:

Run these commands in separate terminals:

```sh
yarn start:api:dev
yarn start:emulators
yarn start:app:dev
```

6. CLI:

If you want to run the cli for admin, scripts, migrations etc.

```sh
yarn build:cli:prod
GOOGLE_APPLICATION_CREDENTIALS=.keys/<REPLACE ME WITH SERVICE ACCOUNT KEY.json> FIRESTORE_EMULATOR_HOST=localhost:5003 node dist/apps/cli/main.js <REPLACE ME WITH COMMAND>
```

## Emulators:

Once the emulators are up, please go to http://localhost:5001 to see the Emulator UI

## Notes!!:

- When creating your Firebase authentication, hosting, storage, functions. Make sure to use the same location throughout. (MAKE SURE TO SET "Default GCP resource location" in Project Settings in Firebase Console. If you do not do this, the app will not work)
- The app is built to be a PWA. (See: So if you deploy it to prod, you can install the app on iOS by adding to home screen or using Android by installing through Chrome)


# My version
1. Clone the COS301-Firebase-test repo
    ``` git clone https://github.com/JNaid00/COS301-Firebase-test.git ```
2. run ```yarn``` in your terminal

3. Next you have to login to firebase and choose your project - Note if I have not added your email to the firebase project this will not work
    * Login into firebase: ```firebase login```
        * To login again/make sure of login: ```firebase login:ci```
    * See all the projects: ```firebase projects:list``` - You should see the Clockwise project there
    * Now you need to choose a project to use: ```firebase use clockwise-12e44```
    * If you run this command again ```firebase projects:list``` you should see 'clockwise-12e44 (current)' meaning it has been selected
4. Now run these commands:
    ```sh
    yarn start:api:dev
    yarn start:emulators
    yarn start:app:dev
    ```
5. Go to: ```http://localhost:4200```
## Errors:
If you run everything and get a blank grey loading block when you log in then:
Go to your auth emulator ```http://127.0.0.1:5001/auth```

Then delete yourself from that list there. - Then create a account and log in again


