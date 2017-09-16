class Admin::PlacesController < AdminController
  before_action :set_place, only: [:edit, :update, :destroy]

  def index
    @places = Place.all
  end

  def new
    @place = Place.new
  end

  def create
    @place = Place.new(place_params)

    if @place.save
      redirect_to [:admin, :places], notice: 'Place was successfully updated.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @place.update(place_params)
      redirect_to [:admin, :places], notice: 'Fest was successfully updated.'
    else
      render :edit
    end
  end

  private
  def set_place
    @place = Place.find(params[:id])
  end

  def place_params
    params.require(:place).permit(:title, :title_short, :desc)
  end
end
