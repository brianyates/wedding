class MessagesController < ApplicationController
  def new
	respond_to do |format|
	  format.html
	  format.js
	end
  end
  
  def create
    @message = Message.create(name: params[:message][:name], message: params[:message][:message])
	@success_bool = false
	if @message.save
	  @success_bool = true
	end
	respond_to do |format|
	  format.html
	  format.js
	end
  end
end
