class RsvpsController < ApplicationController

def create
  @rsvp_exists = false
  @attending = params[:rsvp][:attending_value]
  @plus_one = params[:rsvp][:plus_one]
  @rsvp_check = Rsvp.where(first_name: params[:rsvp][:first_name].upcase, last_name: params[:rsvp][:last_name].upcase)
  if @rsvp_check[0]
	@success_bool = false
	@rsvp_exists = true
  else
	@rsvp = Rsvp.new(first_name: params[:rsvp][:first_name].upcase, 
					  last_name: params[:rsvp][:last_name].upcase,
					  attending_value: params[:rsvp][:attending_value],
					  plus_one: params[:rsvp][:plus_one],
					  so_first_name: params[:rsvp][:so_first_name].upcase,
					  so_last_name: params[:rsvp][:so_last_name].upcase
					  )
	if @rsvp.save 
	  @success_bool = true
	else
	  @success_bool = false
	end
  end
  respond_to do |format|
    format.html
	format.js
  end
end

def index
  @rsvps = Rsvp.all
  respond_to do |format|
	format.html
	format.csv { send_data @rsvps.to_csv }
  end
end
  
end
