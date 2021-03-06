class FestController < ApplicationController
  before_action :set_fest

  def show
    if @fest.is_react?
      respond_to do |format|
        format.html { render :app }
        format.json
      end
    else
      render "fest/show/#{@fest.code}" if lookup_context.template_exists?(@fest.code, 'fest/show')
    end
  end

  def section
    @section = Section.includes(:fest, :events).find_by(fest: @fest, slug: params[:section_slug])
    render "fest/section/#{@section.fest.code}" if lookup_context.template_exists?(@section.fest.code, 'fest/section')
  end

  def about
    render "fest/about/#{@fest.code}" if lookup_context.template_exists?(@fest.code, 'fest/about')
  end

  def speakers
    @speakers = @fest.speakers.uniq.sort_by(&:last_name)
    if @fest.is_react?
      respond_to do |format|
        format.html { render :app }
        format.json
      end
    end
  end

  def partners
    @partners = @fest.partners.order(title: :asc)
    if @fest.is_react?
      respond_to do |format|
        format.html { render :app }
        format.json
      end
    end    
  end

  private
  def set_fest
    @fest = @current_fest
  end
end
