class PhotosController < ApplicationController
	def get
		respond_to do |format|
			format.html
			format.js
		end
	end
end
