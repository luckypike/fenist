class Fest < ApplicationRecord

  has_many :sections

  has_many :events, through: :sections
  has_many :speakers, through: :events

  has_and_belongs_to_many :partners

  default_scope { order(started_at: :asc) }

  def code
    self.slug.underscore
  end

  def title_full
    Rails.application.secrets[:sitename] + ' ' + self.started_at.year.to_s + ': ' + self.title
  end

  def is_react?
    id > 1
  end

  # def smart_slug
  #   self.id != Rails.application.secrets[:fest] ? self.slug : nil
  # end
end
