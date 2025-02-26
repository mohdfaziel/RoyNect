const conf = {
    firebaseApi: String(import.meta.env.VITE_FIREBASE_APIKEY),
    firebaseAuthDomain: String(import.meta.env.VITE_FIREBASE_AUTHDOMAIN),
    firebaseProjectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
    firebaseStorageBucket: String(import.meta.env.VITE_FIREBASE_STORAGEBUCKET),
    firebaseMessagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGINGSENDER_ID),
    firebaseAppId: String(import.meta.env.VITE_FIREBASE_APPID),
}
export default conf;