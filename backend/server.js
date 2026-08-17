// const express = require('express') : instead of using this we user this⬇️

import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.route.js' ;
import profileRoutes from './routes/profile.route.js' ;
import productRoutes from './routes/product.route.js';
import cartRoutes from './routes/cart.route.js';
import couponRoutes from './routes/coupon.route.js';
import paymentRoutes from './routes/payment.route.js';
import analyticsRoutes from './routes/analytics.route.js';
import mongoose from 'mongoose';
import connectDB from './lib/db.js';

dotenv.config();
const app = express();


// console.log(process.env.PORT);
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());  //middleware to parse incoming JSON data
app.use(cookieParser());  //middleware to parse cookies

app.get("/", (req, res) => {
    res.status(200).json({ message: "Backend is running on port 5001" });
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

//mongodb connection
connectDB();

app.listen(PORT, () => {
    console.log("server is started at port", PORT);
})