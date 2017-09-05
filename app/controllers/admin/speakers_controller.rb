class Admin::SpeakersController < AdminController
  before_action :set_speaker, only: [:edit, :update, :destroy]

  def index
    @speakers = Speaker.all
  end

  def new
    @speaker = Speaker.new
  end

  def create
    @speaker = Speaker.new(speaker_params)

    if @speaker.save
      redirect_to [:admin, :speakers], notice: 'Place was successfully updated.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @speaker.update(speaker_params)
      redirect_to [:admin, :speakers], notice: 'Fest was successfully updated.'
    else
      render :edit
    end
  end

  private
  def set_speaker
    @speaker = Speaker.find(params[:id])
  end

  def speaker_params
    params.require(:speaker).permit(:title, :photo, :desc)
  end
end
