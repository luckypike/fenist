namespace :images do
  desc "TODO"
  task recreate: :environment do
    Speaker.all.each do |speaker|
      speaker.photo.recreate_versions! if speaker.photo?
    end

    Partner.all.each do |partner|
      partner.logo.recreate_versions! if partner.logo?
    end

  end
end
