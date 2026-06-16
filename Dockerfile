# Gunakan base image Node.js 22
FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory ke root container
WORKDIR /repo

# Salin seluruh isi folder root repository ke dalam container
COPY . .

# Install semua dependensi menggunakan pnpm (membaca pnpm-workspace.yaml di root)
RUN pnpm install --frozen-lockfile

# Build aplikasi hanya untuk folder 'app'
RUN pnpm --filter app run build

# Expose port Next.js
EXPOSE 3000

# Start aplikasi dari filter 'app'
CMD ["pnpm", "--filter", "app", "run", "start"]