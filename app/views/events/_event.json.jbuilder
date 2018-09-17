json.extract! event, :id, :title, :desc, :started_at, :ended_at
json.speakers event.speakers, partial: 'speakers/speaker', as: :speaker
if event.place
  json.place do
    json.partial! 'places/place', place: event.place
  end
end
