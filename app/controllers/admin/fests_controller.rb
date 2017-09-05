class Admin::FestsController < AdminController
  before_action :set_fest, only: [:edit, :update, :destroy]

  def index
    @fests = Fest.all
  end

  def new
    @fest = Fest.new
  end

  def create
    @fest = Fest.new(fest_params)

    if @fest.save
      redirect_to [:admin, :fests], notice: 'Fest was successfully updated.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @fest.update(fest_params)
      redirect_to [:admin, :fests], notice: 'Fest was successfully updated.'
    else
      render :edit
    end
  end


  private
  def set_fest
    @fest = Fest.find(params[:id])
  end

  def fest_params
    params.require(:fest).permit(:title, :slug, :started_at, :ended_at, :desc)
  end
end
