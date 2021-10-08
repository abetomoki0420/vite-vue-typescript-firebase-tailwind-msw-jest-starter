interface ImportMetaEnv {
  // application basic settings
  readonly VITE_API_ENDPOINT: string
  
  // firebase configurations
  readonly VITE_FIREBASE_APIKEY: string
  readonly VITE_FIREBASE_AUTHDOMAIN: string
  readonly VITE_FIREBASE_DATABASEURL: string
  readonly VITE_FIREBASE_PROJECTID: string
  readonly VITE_FIREBASE_STORAGEBUCKET: string
  readonly VITE_FIREBASE_MESSAGINGSENDERID: string
  readonly VITE_FIREBASE_APPID: string
  readonly VITE_FIREBASE_MEASUREMENTID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
