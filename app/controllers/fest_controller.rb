class FestController < ApplicationController
  def show
    @fest = @current_fest
    render "fest/show/#{@fest.code}" if lookup_context.template_exists?(@fest.code, 'fest/show')
  end
end
