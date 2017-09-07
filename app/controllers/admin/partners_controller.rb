class Admin::PartnersController < AdminController
  before_action :set_partner, only: [:edit, :update, :destroy]

  def index
    @partners = Partner.all
  end

  def new
    @partner = Partner.new
  end

  def create
    @partner = Partner.new(partner_params)

    if @partner.save
      redirect_to [:admin, :partners], notice: 'Place was successfully updated.'
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @partner.update(partner_params)
      redirect_to [:admin, :partners], notice: 'Fest was successfully updated.'
    else
      render :edit
    end
  end

  private
  def set_partner
    @partner = Partner.find(params[:id])
  end

  def partner_params
    params.require(:partner).permit(:title, :logo, :url)
  end
end
