if [[ ! $(heroku apps:info -a app-cf45f6fc) ]]; then
  git init
  heroku create --app app-cf45f6fc --buildpack heroku/nodejs --remote production
  heroku config:set --app app-cf45f6fc SERVER=express-webrouter
  heroku config:set --app app-cf45f6fc SITE_NAME=app-cf45f6fc
  heroku config:set --app app-cf45f6fc TAG=app-cf45f6fc-wbr
  heroku config:set --app app-cf45f6fc TYPE=production
  heroku config:set --app app-cf45f6fc URL=https://app-cf45f6fc.herokuapp.com
else
  if [[ ! -d ".git" ]]; then
    git init
    heroku git:remote --app app-cf45f6fc --remote production
  else
    echo ".git has been already initiated"
    if [[ "$(git remote | grep production)" == "production" ]]; then
      echo "remote has been already set"
    else
      heroku git:remote --app app-cf45f6fc --remote production
    fi
  fi
  echo "app-cf45f6fc has been already created"
fi
