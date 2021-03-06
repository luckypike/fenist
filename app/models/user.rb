class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #  :registerable, :recoverable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :rememberable, :trackable, :validatable

  def remember_me
    true
  end

  def is_admin?
    self.id == 1
  end

  def is_editor?
    is_admin?
  end
end
