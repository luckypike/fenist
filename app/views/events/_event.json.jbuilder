json.extract! event, :id, :title, :desc, :started_at, :ended_at, :book
json.speakers event.speakers, partial: 'speakers/speaker', as: :speaker
json.book_as_link event.book_as_link?

if event.place
  json.place do
    json.partial! 'places/place', place: event.place
  end
end
