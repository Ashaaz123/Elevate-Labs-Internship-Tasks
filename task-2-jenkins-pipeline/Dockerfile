FROM node:20-alpine
WORKDIR /app

# Copy application files
COPY app/package*.json ./
RUN npm ci --only=production

COPY app/ ./

EXPOSE 3000

HEALTHCHECK --interval=20s --timeout=3s --retries=3 \
  CMD wget --spider http://localhost:3000/health || exit 1

CMD ["node", "server.js"]
