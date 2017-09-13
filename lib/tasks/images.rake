namespace :images do
  desc "TODO"
  task recreate: :environment do
    Speaker.all.each do |speaker|
      speaker.photo.recreate_versions! if speaker.photo?
    end
  end
end
