class Speaker < ApplicationRecord
  mount_uploader :photo, PhotoUploader

  has_and_belongs_to_many :events

  def names
    @names ||= self.title.split(' ')
  end

  def first_name
    names[0]
  end

  def last_name
    case names.size
    when 1
      names[0]
    when 2
      names[1]
    when 3
      names[2]
    end
  end
end
