class Admin::EventsController < AdminController
  before_action :set_event, only: [:edit, :update, :destroy]

  def new
    @event = Event.new(section_id: params[:section_id])
    @event.started_at ||= Time.new(2017, 9, 25, 12, 00)
    @event.ended_at ||= Time.new(2017, 9, 25, 13, 00)
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      redirect_to [:admin, :fests], notice: 'Place was successfully updated.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    @event.themes = event_params[:themes]
    @event.themes = [2, 3]
    @event.themes_will_change!
    # p event_params[:themes]
    if @event.update(event_params)
      redirect_to [:admin, :fests], notice: 'Fest was successfully updated.'
    else
      render :edit
    end
  end

  private
  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(:title, :started_at, :ended_at, :partner_id, :desc, :book, :section_id, :place_id, speaker_ids: [], themes: [])
  end
end
