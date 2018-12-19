class WelcomeController < ApplicationController
	def index
		@messages = Message.all.order(created_at: :desc).limit(50)
	end
end
