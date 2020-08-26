# Rails6 + React + TypeScript ~~+ GraphQL~~

### Version
Rails: 6.0.3
Ruby: 2.6.6
React: 16.13.1
Webpacker: 4.2.2

## Setup

### git clone

```
cd /path/to/work
git clone <hoge>
cd <hoge>
```

### install MySQL
```
brew install mysql
mysql.server start
```

### bundle install

```
bundle install
```

### Install yarn and setup

```
brew install yarn
bin/rake yarn:install
```

### db setup

```
bin/rails db:create
RAILS_ENV=development bin/rails db:migrate
```

### access
```
bin/rails s
./bin/webpack-dev-server
```
[http://localhost:3000/](http://localhost:3000/)


## Test

```
RAILS_ENV=test bin/rake assets:precompile
bundle exec rspec
```
