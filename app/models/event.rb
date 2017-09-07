class Event < ApplicationRecord
  THEMES = %w(sci art tech)

  serialize :themes, Array


  belongs_to :partner, optional: true
  belongs_to :section
  belongs_to :place, optional: true

  has_and_belongs_to_many :speakers

  validates_presence_of :title, :started_at, :ended_at
end
