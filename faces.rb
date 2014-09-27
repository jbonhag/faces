require 'sinatra'
require 'sinatra/json'

get '/' do
  send_file File.join(settings.public_folder, 'index.html')
end

get '/faces' do
  json Dir.glob(File.join(settings.public_folder, "*.gif"))
end
