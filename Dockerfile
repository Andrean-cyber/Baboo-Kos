FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /repo

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]

