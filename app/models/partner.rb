class Partner < ApplicationRecord
  mount_uploader :logo, LogoUploader

  def url_human
    self.url.gsub(/http(s|)\:\/\//, '').gsub(/\/$/, '').gsub('www.', '')
  end
end
