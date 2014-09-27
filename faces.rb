require 'sinatra'
require 'sinatra/json'

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

get '/faces' do
  json Dir.entries(settings.public_folder).select {|f| f.end_with? '.gif'}
end
