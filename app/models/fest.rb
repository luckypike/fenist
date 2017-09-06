class Fest < ApplicationRecord

  has_many :sections

  default_scope { order(started_at: :asc) }

  def code
    self.slug.underscore
  end

  # def smart_slug
  #   self.id != Rails.application.secrets[:fest] ? self.slug : nil
  # end
end
