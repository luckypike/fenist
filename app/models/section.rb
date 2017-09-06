class Section < ApplicationRecord
  belongs_to :fest
  belongs_to :place, optional: true

  has_many :events

  def code
    self.slug.underscore
  end

  def started_at
    @started_at = events.order(started_at: :asc).first.started_at rescue nil
  end

  def ended_at
    @ended_at ||= events.order(ended_at: :desc).first.ended_at
  end

  def same_month_dates
    started_at.month == ended_at.month
  end
end
