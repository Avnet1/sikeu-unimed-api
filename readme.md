# Readme

# Setup Rest API Via Docker

1. Clone Project

```docker
  git clone https://github.com/Avnet1/sikeu-unimed-api
```

2. Create file .env and copy .env.example into file .env

```docker
cp .env.example .env
```

2. Run docker compose file

```
  make app-deploy
```

# Troubleshoot Access Privalleges on MySQL as Admin

Run Docker Command in Terminal

```docker
  docker exec -it finance_mysql mysql -u root -p
```

Run SQL Query on Terminal

```sql
  SELECT user, host FROM mysql.user;
  SHOW GRANTS FOR 'admin'@'%';
  GRANT ALL PRIVILEGES ON sikeu_unimed.* TO 'admin'@'%';
  FLUSH PRIVILEGES;
```

Restart MySQL Container Server

```docker
  docker restart finance_mysql
```

Restart Service Core Api

```docker
  docker restart finance_core_app
```

# Credential User

1. Login user as admin

```
 {
  "email": "admin@example.com",
  "password": "oracle123",
}
```

2. Login user as developer

```
  {
  "email": "ruben@example.com",
  "password": "test123",
}

```

# Run Migration Command Using Docker

```
  make migration-run
```

# Run Migration Command Local

```
  npm run typeorm-ts-node-commonjs migration:run -- -d ./src/config/dbconfig.ts
```

# Run Seeder Command Using Docker

```
  make seed
```

# Run Seed Command Local

```
  ts-node src/database/seeders/index.ts
```
