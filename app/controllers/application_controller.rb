class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :set_fests

  private
  def set_fests
    @active_fest = Fest.find(Rails.application.secrets[:fest])
    fest = Fest.find_by_slug(params[:fest_slug])

    if fest
      redirect_to root_path if fest == @active_fest
      @current_fest = fest
    else
      @current_fest = @active_fest
    end
  end
end
