docker build --no-cache -f SQL\Dockerfile.PostgreSql -t restoran1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t restoran1-java/app ../../..
