lock "~> 3"

set :application, "fenist"
set :repo_url, "git@github.com:luckypike/fenist.git"

set :ssh_options, { forward_agent: true }

set :deploy_to, "/home/deploy/apps/fenist.org"

append :linked_files, "config/database.yml", "config/secrets.yml", 'db/production.sqlite3'
append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system", 'public/uploads'

set :keep_releases, 5
