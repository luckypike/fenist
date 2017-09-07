class FestController < ApplicationController
  def show
    @fest = @current_fest
    render "fest/show/#{@fest.code}" if lookup_context.template_exists?(@fest.code, 'fest/show')
  end

  def section
    @section = Section.includes(:fest, :events).find_by(fest: @current_fest, slug: params[:section_slug])
    render "fest/section/#{@section.fest.code}" if lookup_context.template_exists?(@section.fest.code, 'fest/section')
  end

  def about
    @fest = @current_fest
    render "fest/about/#{@fest.code}" if lookup_context.template_exists?(@fest.code, 'fest/about')
  end
end
