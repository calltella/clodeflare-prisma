FROM node:22-bookworm

# root 権限でパッケージをインストール
USER root

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      git \
      curl \
      sudo && \
    rm -rf /var/lib/apt/lists/*

# wheel グループを作成（存在しなければ）
RUN getent group wheel || groupadd wheel

# node ユーザーを wheel に追加
RUN usermod -aG wheel node

# wheel グループに sudo 権限を付与
RUN echo "%wheel ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/wheel && \
    chmod 0440 /etc/sudoers.d/wheel

WORKDIR /app

# node ユーザーに切り替え
USER node

EXPOSE 3000

# Dockerネットワーク
# docker network create --driver bridge --subnet 192.168.10.64/27 --gateway 192.168.10.65 docker_vercel_network

# コンテナ作成
# cd ~/cloudflare-prisma/docker && docker build -t cloudflare-prisma .

# コンテナ起動
# cd ~/cloudflare-prisma
# docker run -d -v $(pwd):/app -p 8976:8976 --network docker_vercel_network cloudflare-prisma tail -f /dev/null
