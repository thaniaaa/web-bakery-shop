import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function localApiPlugin() {
  const subscribers = [];

  const foods = [
    { id: 1, name: 'Birthday Cake', price: 25.0, rating: 4.9, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60' },
    { id: 2, name: 'Muffin', price: 15.0, rating: 4.8, image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=500&auto=format&fit=crop&q=60' },
    { id: 3, name: 'Biscuits', price: 15.0, rating: 4.7, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60' },
    { id: 4, name: 'Croissant', price: 15.0, rating: 4.9, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60' },
    { id: 5, name: 'Tarts', price: 15.0, rating: 4.8, image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=60' },
    { id: 6, name: 'Cheesecake', price: 15.0, rating: 4.9, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=60' },
    { id: 7, name: 'Pie', price: 15.0, rating: 4.7, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60' },
    { id: 8, name: 'Coffee', price: 15.0, rating: 4.8, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&auto=format&fit=crop&q=60' },
  ];

  return {
    name: 'local-api-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // GET /api/foods
        if (req.url === '/api/foods' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          return res.end(JSON.stringify(foods));
        }

        // POST /api/subscribe
        if (req.url === '/api/subscribe' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              const email = data.email ? data.email.trim() : '';

              if (!email || !email.includes('@')) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 400;
                return res.end(JSON.stringify({ message: 'Email tidak valid atau belum diisi.' }));
              }

              subscribers.push(email);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              return res.end(JSON.stringify({ message: 'Berhasil berlangganan newsletter!' }));
            } catch {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 400;
              return res.end(JSON.stringify({ message: 'Payload tidak valid.' }));
            }
          });
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), localApiPlugin()],
});
