# Gunakan base image Node.js 22
FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory ke root
WORKDIR /repo

# Salin seluruh isi folder root repository ke dalam container
COPY . .

# Install semua dependensi
RUN pnpm install --frozen-lockfile

# Build aplikasi
RUN pnpm --filter app run build

# Expose port Next.js
EXPOSE 3000

# TAMBAHKAN INI: Membantu Coolify mengetahui aplikasi sehat atau tidak
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000/ || exit 1

# Start aplikasi
CMD ["pnpm", "--filter", "app", "run", "start"]