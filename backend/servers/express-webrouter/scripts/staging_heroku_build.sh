if [[ ! $(heroku apps:info -a staging-app-cf45f6fc) ]]; then
  git init
  heroku create --app staging-app-cf45f6fc --buildpack heroku/nodejs --remote staging
  heroku config:set --app staging-app-cf45f6fc SERVER=express-webrouter
  heroku config:set --app staging-app-cf45f6fc SITE_NAME=app-cf45f6fc
  heroku config:set --app staging-app-cf45f6fc TAG=app-cf45f6fc-wbr
  heroku config:set --app staging-app-cf45f6fc TYPE=staging
  heroku config:set --app staging-app-cf45f6fc URL=https://staging-app-cf45f6fc.herokuapp.com
else
  if [[ ! -d ".git" ]]; then
    git init
    heroku git:remote --app staging-app-cf45f6fc --remote staging
  else
    echo ".git has been already initiated"
    if [[ "$(git remote | grep staging)" == "staging" ]]; then
      echo "remote has been already set"
    else
      heroku git:remote --app staging-app-cf45f6fc --remote staging
    fi
  fi
  echo "staging-app-cf45f6fc has been already created"
fi
