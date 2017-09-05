class Admin::SectionsController < AdminController
  before_action :set_section, only: [:show, :edit, :update, :destroy]

  def new
    @section = Section.new(fest_id: params[:fest_id])
  end

  def create
    @section = Section.new(section_params)

    if @section.save
      redirect_to [:admin, :fests], notice: 'Section was successfully updated.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @section.update(section_params)
      redirect_to [:admin, :fests], notice: 'Section was successfully updated.'
    else
      render :edit
    end
  end

  private
  def set_section
    @section = Section.find(params[:id])
  end

  def section_params
    params.require(:section).permit(:title, :slug, :desc, :photo, :fest_id, :place_id)
  end
end
