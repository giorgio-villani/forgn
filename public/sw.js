// Minimal service worker to prevent 404 errors
// This file is intentionally minimal as we're not using service workers

self.addEventListener('install', function(event) {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  // Claim all clients immediately
  event.waitUntil(self.clients.claim());
});

// No fetch event handler - let requests pass through normally 