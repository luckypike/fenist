class LogoUploader < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  storage :file
  # storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :thumb do
    process resize_to_limit: [1200, 1200]
    process :optimize
  end

  version :small do
    process resize_to_limit: [200, 200]
    process :optimize
  end

  process resize_to_limit: [3000, 3000]

  def extension_whitelist
    %w(jpg jpeg gif png)
  end

  def filename
    "photo.#{file.extension}" if original_filename
  end
end
