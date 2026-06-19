"use client";

import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

type LeadPayload = {
  email: string;
  bakeFocus?: string;
  source: "landing" | "survey";
};

type SurveyPayload = {
  email?: string;
  bakingFocus: string;
  experience: string;
  products: string[];
  flourSignals: string[];
  fermentation: string[];
  biggestQuestion: string;
  extraNotes?: string;
};

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

function hasFirebaseConfig() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
}

function getFirebaseApp(): FirebaseApp | null {
  if (!hasFirebaseConfig()) return null;
  return getApps()[0] ?? initializeApp(firebaseConfig);
}

function saveLocal(collectionName: string, payload: unknown) {
  const key = `bakkerslab:${collectionName}`;
  const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]") as unknown[];
  existing.push({ payload, createdAt: new Date().toISOString() });
  window.localStorage.setItem(key, JSON.stringify(existing));
}

export async function saveLead(payload: LeadPayload) {
  const app = getFirebaseApp();

  if (!app) {
    saveLocal("leads", payload);
    return { mode: "local" as const };
  }

  await addDoc(collection(getFirestore(app), "leads"), {
    ...payload,
    createdAt: serverTimestamp()
  });

  return { mode: "firebase" as const };
}

export async function saveSurvey(payload: SurveyPayload) {
  const app = getFirebaseApp();

  if (!app) {
    saveLocal("surveyResponses", payload);
    return { mode: "local" as const };
  }

  await addDoc(collection(getFirestore(app), "surveyResponses"), {
    ...payload,
    createdAt: serverTimestamp()
  });

  return { mode: "firebase" as const };
}

export async function saveContact(payload: ContactPayload) {
  const app = getFirebaseApp();

  if (!app) {
    saveLocal("contactMessages", payload);
    return { mode: "local" as const };
  }

  await addDoc(collection(getFirestore(app), "contactMessages"), {
    ...payload,
    createdAt: serverTimestamp()
  });

  return { mode: "firebase" as const };
}
