const express = require('express');
const cors = require('cors');
const serviceRoutes = require('./routes/serviceRoutes');
// const reservationRoutes = require('./routes/reservationRoutes');
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const appointmentsRoutes = require('./routes/appointmentsRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
// const roleRoutes = require('./routes/roleRoutes');
// const notificationRoutes = require('./routes/notificationRoutes');
// const timesRoutes = require('./routes/timesRoutes');
// const tokenRoutes = require('./routes/tokenRoutes');
const bodyParser = require('body-parser');
const connectDB = require('./dbConnection');
const app = express();
app.use('/images',express.static('images'));
app.use(cors());
// Middleware to parse JSON
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// app.use(express.json({limit:'50mb'}));
// app.use(express.static(__dirname + '/uploads/images'));
// Use routes
app.use('/services', serviceRoutes);
app.use('/home', homeRoutes);
app.use('/appointments', appointmentsRoutes);
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/doctors', doctorRoutes);
// app.use('/api',tokenRoutes);


connectDB();



// app.post("/api", async (req, res) => {
//   const { comment, name } = req.body;
//   const message = {
//     message: {
//       data: {
//         title: "Hello, ",
//         body: `${name} says: ${comment}`,
//       },
//     },
//   };
//   const response = await fetch("https://fcm.googleapis.com/fcm/send", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "key=your_server_key",
//     },
//     body: JSON.stringify(message),
//   });
//   const data = await response.json();
//   if (data.success) {
//     res.status(200).send("Message sent successfully");
//     console.log("Message sent successfully");
//   } else {
//     res.status(500).send("Failed to send message");
//     console.error("Error sending message:", data);
//   }
// });



// API route to send push notification
// app.post("/api/send-notification", async (req, res) => {
//   const { message, token } = req.body;
//   console.log("api/send-notification", message);
//   try {
//     // Fetch all stored tokens from MongoDB
//     const tokens = await Token.find();

//     // Prepare push notifications payload for each token
//     let messages = [];
//     for (let token of tokens) {
//       if (Expo.isExpoPushToken(token.token)) {
//         messages.push({
//           to: token.token, // Expo push token
//           sound: "default",
//           body: message,
//         });
//       } else {
//         console.log(`Invalid Expo push token: ${token.token}`);
//       }
//     }

//     if (messages.length > 0) {
//       // Send notifications through Expo's service
//       const chunks = expo.chunkPushNotifications(messages);
//       const tickets = [];

//       for (let chunk of chunks) {
//         try {
//           const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
//           tickets.push(...ticketChunk);
//         } catch (error) {
//           console.error(error);
//         }
//       }

//       console.log("Push notifications sent:", tickets);
//       res.status(200).send("Notification sent successfully");
//     } else {
//       res.status(400).send("No valid Expo tokens found");
//     }
//   } catch (error) {
//     console.error("Error sending notification:", error);
//     res.status(500).send("Failed to send notification");
//   }
// });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
