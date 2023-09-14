import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyC8sPhtlHr8y3Fx17TzsffnVF4Zih0fSz4',
  authDomain: 'angular-ssr-firebase-7dfdd.firebaseapp.com',
  projectId: 'angular-ssr-firebase-7dfdd',
  storageBucket: 'angular-ssr-firebase-7dfdd.appspot.com',
  messagingSenderId: '954486474849',
  appId: '1:954486474849:web:9fbc967056cdeaab0cc220',
  measurementId: 'G-TMQG5G7E1V',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
