importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "YOUR_FIREBASE_API_KEY",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
});

const messaging = firebase.messaging();

// Lógica para exibir a notificação quando o app estiver em segundo plano
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo192.png' // Coloque o caminho do seu ícone aqui
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});