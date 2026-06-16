# Gunakan base image Node.js 22
FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory ke root
WORKDIR /app

# Salin file konfigurasi workspace terlebih dahulu agar cache efisien
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY app/package.json ./app/

# Install semua dependensi (akan membaca pnpm-workspace.yaml)
RUN pnpm install --frozen-lockfile

# Salin seluruh source code
COPY . .

# Build aplikasi hanya untuk folder 'app'
RUN pnpm --filter app run build

# Expose port (biasanya Next.js menggunakan 3000)
EXPOSE 3000

# Start aplikasi
CMD ["pnpm", "--filter", "app", "run", "start"]