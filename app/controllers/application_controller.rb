class ApplicationController < ActionController::Base
  before_action :set_fests

  layout :fest_layout

  private
  def set_fests
    @active_fest = Fest.find(Rails.application.secrets[:fest])
    redirect_to [:fest, fest_slug: @active_fest.slug] if !params[:fest_slug] && controller_name == 'fest'
    @current_fest = Fest.find_by_slug(params[:fest_slug])
    @current_fest ||= @active_fest

    # if fest
    #   # redirect_to root_path if fest == @active_fest
    #   @current_fest = fest
    # else
    #   @current_fest = @active_fest
    # end
  end

  def fest_layout
    @current_fest.slug
  end
end
