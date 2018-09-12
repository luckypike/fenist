json.extract! section, :id, :title, :desc, :started_at, :ended_at

json.events section.events.sort_by(&:started_at), partial: 'events/event', as: :event
