# Steps to follow for prisma adaptor to work

1.) In `.env` paste the `DATABASE_URL=` from `railway` or `PlanetScale`

2.) Run:

```bash
npx prisma migrate dev
```

This will create an SQL migration file and execute it.

3.) Generate Client

```bash
npx prisma generate
```

4.) To configure your database to use the new schema (i.e. create tables and columns) use the prisma migrate command:

```bash
npx prisma migrate dev
```


# Steps to follow for Auth to work

- Have a `secret`
- Have a `JWT secret`
- As well as the `id` and `url` for your `auth` provider
