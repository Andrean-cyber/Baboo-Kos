FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /repo
COPY . .

# Install semua dependensi (pnpm akan membaca pnpm-workspace.yaml sekarang)
RUN pnpm install --frozen-lockfile

# Build
RUN pnpm --filter app build

EXPOSE 3000

# Start dengan perintah standar
CMD ["pnpm", "--filter", "app", "start"]