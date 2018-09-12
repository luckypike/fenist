json.extract! event, :id, :title, :desc, :started_at, :ended_at

json.speakers event.speakers, partial: 'speakers/speaker', as: :speaker
