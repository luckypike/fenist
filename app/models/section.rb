class Section < ApplicationRecord
  belongs_to :fest
  belongs_to :place, optional: true

  has_many :events
  has_many :speakers, through: :events

  def code
    self.slug.underscore
  end

  def started_at
    @started_at = events.sort_by(&:started_at).first.started_at rescue nil
  end

  def ended_at
    @ended_at ||= events.sort_by(&:ended_at).reverse.first.ended_at rescue nil
  end

  def same_month_dates
    started_at.month == ended_at.month
  end
end
