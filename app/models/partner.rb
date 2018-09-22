class Partner < ApplicationRecord
  mount_uploader :logo, LogoUploader
  has_and_belongs_to_many :fests

  def url_human
    self.url.gsub(/http(s|)\:\/\//, '').gsub(/\/$/, '').gsub('www.', '')
  end
end
