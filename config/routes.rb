Rails.application.routes.draw do
  root 'fest#show'

  scope(path: ':fest_slug', constraints: lambda { |request| Fest.find_by_slug(request.params[:fest_slug]).present? }) do
    get '', to: 'fest#show', as: :static_fest
  end

  # get 'about', to: 'static#about'

  scope format: false do
    devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout'}

    scope 'about' do
      get '', to: 'pages#about', as: :about
    end
  end

  namespace :admin do
    get '', to: '/admin#index'
    resources :fests
    resources :sections
    resources :places
    resources :speakers
    resources :events
  end
end
