source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.3'
gem 'sqlite3'
gem 'puma'

gem 'sass-rails', github: 'rails/sass-rails'
gem 'autoprefixer-rails', github: "ai/autoprefixer-rails"
gem 'jbuilder'

gem 'slim-rails'
gem 'uglifier'
gem 'inline_svg'

gem 'devise'

gem 'actionview-encoded_mail_to'

gem 'meta-tags'
gem 'active_link_to'

gem 'simple_form'
gem 'carrierwave', github: 'carrierwaveuploader/carrierwave'
gem 'mini_magick'
gem 'redcarpet'

gem 'capistrano'
gem 'capistrano-rails'
gem 'capistrano-passenger'
gem 'capistrano-rbenv'

gem 'rails-i18n'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 3.6'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

